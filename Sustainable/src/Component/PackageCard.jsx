import React from 'react';
import '../Styles/PackageCard.css';

function PackageCard({ title, price, monthlyPrice, bulletPoints }) {
    return (
        <div className="package-card">
            <h2 className="package-title">{title}</h2>
            <hr className="package-divider" />
            <div className="package-price">{price} DKK</div>
            <div className="package-monthly">pr. md.</div>
            <ul className="package-list">
                {bulletPoints.map((point, index) => (
                    <li key={index} className="package-point">{point}</li>
                ))}
            </ul>
        </div>
    );
}

export default PackageCard;
