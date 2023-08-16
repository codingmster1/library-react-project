import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from 'react';

const Book = () => {
    return (
        <div className="book">
        <a href="">
            <figure className="book__img--wrapper">
                <img src="https://cdnb.artstation.com/p/assets/images/images/015/140/301/original/sascha-sendlbeck-book-animation.gif?1547203918" alt="" className="book__img"/>
            </figure>
        </a>
        <div className="book__title">
            <a href="/" className="book__title--link">
                Animal Farm
            </a>
        </div>
        <div className="book__ratings">
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star-half-alt" />   
        </div>
        <div className="book__price">
              <span className="book__price--normal">$15.00</span>
          $10.00
        </div>
    </div>

    );
}

export default Book;