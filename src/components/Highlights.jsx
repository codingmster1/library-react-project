import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="orange">Library?</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <div className="highlight">
                            <div className="highlight__img">
                                <FontAwesomeIcon icon="bolt"/>
                            </div>
                            <h3 className ="highlight__subtitle">Easy and Quick</h3>
                            <p className ="highlight__para">
                                Get access instantly!
                            </p>
                        </div>
                        <div className="highlight">
                            <div className="highlight__img">
                                <FontAwesomeIcon icon="book-open"/>
                            </div>
                            <h3 className ="highlight__subtitle">HUGE Selection</h3>
                            <p className ="highlight__para">
                                There's something for everybody in your favorite genre.
                            </p>
                        </div>
                        <div className="highlight">
                            <div className="highlight__img">
                                <FontAwesomeIcon icon="tags"/>
                            </div>
                            <h3 className ="highlight__subtitle">Affordable</h3>
                            <p className ="highlight__para">
                                Never pay too much.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights;