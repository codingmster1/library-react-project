import React from 'react';
import UndrawBooks from '../assets/f451.gif';

const Landing = () => {
    return (
    <section id="landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>Americas most awarded banned literature platform</h1>
                    <h2>Find your forbidden book with <span className="orange">Library</span></h2>
                    <a href="#features">
                      <button className ="btn">Browse Books</button>
                    </a>
                </div>
                <figure className="header__img--wrapper">
                   <img src={UndrawBooks} alt="" />
                </figure>
            </div>
        </header>
    </section>

    );
}

export default Landing;