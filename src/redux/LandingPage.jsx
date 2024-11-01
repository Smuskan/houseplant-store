
import React from 'react';
import './LandingPage.css'; // Ensure your CSS file styles the background

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Houseplant Store</h1>
            <p>Your one-stop shop for unique houseplants!</p>
            <a href="/products" className="get-started-button">Get Started</a>
        </div>
    );
};

export default LandingPage;
