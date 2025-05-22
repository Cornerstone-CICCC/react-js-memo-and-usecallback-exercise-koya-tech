import React from "react";

type Props = {
    fetchProducts: () => void;
};

const GetProductsButton = React.memo(function GetProductsButton({
    fetchProducts,
}: Props) {
    console.log("Rendered Button Component");
    return <button onClick={fetchProducts}>Fetch Products</button>;
});

export default GetProductsButton;
