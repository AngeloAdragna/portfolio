import React, { useState, useEffect, useRef } from 'react';
import '../styles/LoadingPage.css';

const LoadingPage = () => {
    return (
        <section id="loading">
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Chargement...</p>
            </div>
        </section>
    );
};

export default LoadingPage;
