import Product from "../components/Product";

export default function Home({ products }) {
    return (
        <div className="home">
            {
                products.map((product) => <Product key={product.id} product={product} />)
            }
        </div>
    );
}