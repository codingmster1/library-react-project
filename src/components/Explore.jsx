import React from 'react';

const Explore = () => {
    return (
        <section id="explore">
            <div class="container">
                <div className="row row__column">
                    <h2>
                        Find more <span className="orange">Books</span>
                    </h2>
                    <a href="/books">
                        <button className="btn">Explore</button>
                    </a>
                </div>
            </div>
        </section>

    );
}

export default Explore;