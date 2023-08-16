import React from 'react';
import Logo from '../assets/linkhat.png';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <a href="/">
                        <figure className="footer__logo">
                            <img src={Logo} className = "footer__logo--img" alt="" />
                        </figure>
                    </a>
                    <div className="footer__list">
                        <a href="/" className="footer__link">Home</a>
                        <span className="footer__link no-cursor">About</span>
                        <a href="/books" class="footer__link">Books</a>
                        <a href="/cart" class="footer__link">Cart</a>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2023 Library
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;