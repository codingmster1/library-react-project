import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const BookInfo = ({books}) => {
    return (
        <div id="books__body">
            <main id="books__main">
                <div className ="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" classname="book__link">
                                <FontAwesomeIcon icon="arrow-left"/>
                            </Link>
                            <Link to="/books" classname="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src="https://cdnb.artstation.com/p/assets/images/images/015/140/301/original/sascha-sendlbeck-book-animation.gif?1547203918" alt="/" className ="book__selected--img">
                                </img>
                            </figure>
                            <div className="book__selected--description">
                                <div className="book__selected--title">Animal Farm</div>
                                <FontAwesomeIcon icon="star"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
}

export default BookInfo;