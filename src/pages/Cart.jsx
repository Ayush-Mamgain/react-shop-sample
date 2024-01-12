import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

export default function Cart() {
    const cart = useSelector(state => state.cart);
    console.log(cart);

    function totalPrice() {
        return cart.reduce( (ac, curr) => ac + curr.price, 0);
    }

    return (
        cart.length !== 0 ? 
        (
            <div className="cart">
                <div className="cart-items">
                    {
                        cart.map( (item) => <CartItem key={item.id} item={item} />)
                    }
                </div>
                <div className="cart-summary">
                    <p>Your cart</p>
                    <p>Summary:</p>
                    <p>Total items: {cart.length}</p>
                    <p>Total amount: <span className="total-price">${totalPrice()}</span></p>
                    <button className="check-btn mordern-btn">
                        Checkout Now
                    </button>
                </div>
            </div>
        ):
        (
            <div className="empty-cart">
                <p>No items found</p>
                <NavLink className="check-home-link mordern-btn" to="/">
                    HOME
                </NavLink>
            </div>
        )
    );
}