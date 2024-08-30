import React from 'react';

// Sample components for Header, Footer, and Sidebar (You can replace these with your actual components)
const Header = () => <header><h1>App Header</h1></header>;
const Footer = () => <footer><p>&copy; 2024 Your Company</p></footer>;
const Sidebar = () => <aside><nav><ul><li>Home</li><li>About</li><li>Contact</li></ul></nav></aside>;
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
const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="content-wrapper">
                <Sidebar />
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
export default Layout;
