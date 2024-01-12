import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/cartSlice";
import { FaTrash } from "react-icons/fa";

export default function CartItem({ item }) {
    const dispatch = useDispatch();

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
                    <FaTrash className="cart-remove-btn" onClick={() => dispatch(removeItem(item.id))} />
                </div>
            </div>
        </div>
    );
}