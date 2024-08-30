import React from 'react';

// Sample components for Header, Footer, and Sidebar (You can replace these with your actual components)
const Header = () => <header><h1>App Header</h1></header>;
const Footer = () => <footer><p>&copy; 2024 Your Company</p></footer>;
const Sidebar = () => <aside><nav><ul><li>Home</li><li>About</li><li>Contact</li></ul></nav></aside>;

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
