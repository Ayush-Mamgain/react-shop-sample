import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/cartSlice";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

export default function CartItem({ item }) {
    const dispatch = useDispatch();
    const [itemCount, setItemCount] = useState(1);
    const [itemTotalPrice, setItemTotalPrice] = useState(item.price);

    function countHandler(increment) {
        if(increment) {
            setItemCount(prevCount => prevCount+1);
            setItemTotalPrice(prevPrice => prevPrice + item.price);
        }
        else {
            if(itemCount !== 1) {
                setItemCount(prevCount => prevCount - 1);
                setItemTotalPrice(prevPrice => prevPrice - item.price);
            }
        }
    }

    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={item.image}/>
            </div>
            <div className="cart-item-details">
                <p className="cart-item-title">{item.title}</p>
                <p className="cart-item-description">{item.description}</p>
                <div className="cart-item-footer">
                    <span className="cart-item-price">${item.price}</span>
                    <button className="item-count-btn" onClick={() => countHandler(false)}>
                        -
                    </button>
                    <span>{itemTotalPrice.toFixed(2)}</span>
                    <button className="item-count-btn" onClick={() => countHandler(true)}>
                        +
                    </button>
                    <FaTrash className="cart-remove-btn" onClick={() => dispatch(removeItem(item.id))} />
                </div>
            </div>
        </div>
    );
}