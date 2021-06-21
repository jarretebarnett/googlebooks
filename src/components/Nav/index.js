import React from 'react';
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ opacity: 93 }}>
            <div className="container">
                <div className="row-cols-auto">
                    <div className="navbar" id="navbarNav">
                        <a className="navbar-brand" href="/">
                            Google Books Queue
                        </a>
                        <a className="nav-link" href="/saved">Saved</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;