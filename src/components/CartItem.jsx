import { useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../redux/slices/cartSlice";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function CartItem({ item, totalPrice }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    let prodCount = cart.find(prod => prod.item.id === item.id).count;

    function countHandler(increase) {
        if(increase) {
            dispatch(increment(item.id));
        }
        else {
            if(prodCount > 1)
                dispatch(decrement(item.id));
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
                    <div className="change-count">
                        <button className="item-count-btn" onClick={() => countHandler(false)}>
                            -
                        </button>
                        <span>{prodCount}</span>
                        <button className="item-count-btn" onClick={() => countHandler(true)}>
                            +
                        </button>
                    </div>
                    <FaTrash className="cart-remove-btn" onClick={() => dispatch(removeItem(item.id))} />
                </div>
            </div>
        </div>
    );
}