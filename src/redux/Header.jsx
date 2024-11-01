
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItemsCount = useSelector((state) => state.cart.items.length);

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Shopping Cart ({cartItemsCount})</Link>
            </nav>
        </header>
    );
};

export default Header;
