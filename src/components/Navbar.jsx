import { useState, useEffect } from 'react';
import { BurgerMenuIcon } from './BurgerMenuIcon.jsx'
import './Navbar.css'

export const Navbar = () => {
    const tags = ['Home', 'About Me', 'Projects', 'Contact']

    const [navOpen, setNavOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleMenu = () => {
        setNavOpen(!navOpen);
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="navbar">
            <nav className="navbar-nav">
                {windowWidth <= 500 && (
                    <button className="navbar-nav-toggle" aria-label="Abrir menú" onClick={toggleMenu}>
                        <BurgerMenuIcon />
                    </button>
                )}
                <ul className={windowWidth <= 500 ? (navOpen ? 'navbar-nav-list show-toggled' : 'navbar-nav-list no-show-toggled') : 'navbar-nav-list'}>
                    {tags.map(tag => (
                        <li key={tag} className="navbar-nav-list-item">
                            <a href={`#${tag.replace(/ /g, "")}`} onClick={toggleMenu}>{tag}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}


