import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header className="layout-header">
                <nav className="navbar">
                    <a href="/" className="nav-logo">MyApp</a>
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="layout-content">
                {children}
            </main>
            <footer className="layout-footer">
                <div className="footer-content">
                    <p>&copy; 2024 MyApp. All rights reserved.</p>
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
