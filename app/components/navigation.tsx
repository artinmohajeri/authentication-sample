import React, { useState } from 'react'
import Link from 'next/link';

const Navigation = () => {

    const [activeLink, setActiveLink] = useState(null);
    const [open, setOpen] = React.useState(false);
    return (
        <div className="links-container">
            <Link href="/" className="nav-link" id="auth-link">
                <div className="link-content">
                    <span className="link-icon">🏠</span>
                    <span className="link-text">Home</span>
                    <span className="hover-effect"></span>
                </div>
            </Link>
            <Link
                href="/auth"
                className={`nav-link ${activeLink === 'auth' ? 'active' : ''}`}
                onMouseEnter={() => setActiveLink('auth')}
                onMouseLeave={() => setActiveLink(null)}
                id="auth-link"
            >
                <div className="link-content">
                    <span className="link-icon">🔐</span>
                    <span className="link-text">Authentication</span>
                    <span className="hover-effect"></span>
                </div>
            </Link>

            <Link
                href="/dashboard"
                className={`nav-link ${activeLink === 'dashboard' ? 'active' : ''}`}
                onMouseEnter={() => setActiveLink('dashboard')}
                onMouseLeave={() => setActiveLink(null)}
                id="dashboard-link"
            >
                <div className="link-content">
                    <span className="link-icon">📊</span>
                    <span className="link-text">Dashboard</span>
                    <span className="hover-effect"></span>
                </div>
            </Link>
        </div>
    )
}

export default Navigation
