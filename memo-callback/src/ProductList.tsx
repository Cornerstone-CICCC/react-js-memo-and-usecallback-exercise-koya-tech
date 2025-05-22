import { useState, useCallback } from "react";
import GetProductsButton from "./GetProductsButton";

const ProductList = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [products, setProducts] = useState<any[]>([]);

    const fetchProducts = useCallback(async () => {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <GetProductsButton fetchProducts={fetchProducts} />
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
