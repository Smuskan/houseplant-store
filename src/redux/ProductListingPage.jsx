
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const ProductListingPage = ({ products }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    return (
        <div className="product-listing">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.thumbnail} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductListingPage;
