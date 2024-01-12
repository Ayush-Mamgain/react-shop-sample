import toast from "react-hot-toast";
import { addToCart, removeItem } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Product({ product }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    // const [selected, setSelected] = useState(false); --> on re-rendering it again becomes false; we need to figure out a way to use it inside useEffect so it only occurs in first render!

    function add() {
        dispatch(addToCart(product));
        // setSelected(true);
        toast.success("Item added");
    }

    function remove() {
        dispatch(removeItem(product.id));
        // setSelected(false);
        toast.error("Item removed");
    }

    return (
        <div className="product" onClick = { 
                () => {
                    cart.some( (item) => item.id ===  product.id) ? remove() : add()
                } 
        }>
            <div className="product-description">
                <p className="title">{product.title.substring(0,16)}...</p>
                <p className="info">{product.description.substring(0,65)}...</p>
                <div className="image-container">
                    <img src={product.image}/>
                </div>
            </div>
            <div className="price-cart">
                <span className="price">${product.price}</span>
                {
                    cart.some( (item) => item.id ===  product.id) ?
                    (
                        <button className="cart-btn">
                            remove item
                        </button>
                    ) :
                    (
                        <button className="cart-btn">
                            add to cart
                        </button>
                    )
                }
            </div>
        </div>
    );
}