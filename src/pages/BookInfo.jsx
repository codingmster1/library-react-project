import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Price from '../components/ui/Price';
import Rating from '../components/ui/Rating';

const BookInfo = ({books}) => {
    const {id} = useParams();
    const book = books.find(book => +book.id === +id);
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
                                <img src={book.url}
                                alt=""
                                className="book__selected--img"
                                />
                            </figure>
                            <div className="book__selected--description">
                                <div className="book__selected--title">
                                    {book.title}
                                </div>
                                <Rating rating={book.rating}/>
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        <em>"All animals are equal, but some are more equal than others". </em>
                                     A group of anthropomorphic farm animals who rebel 
                                    against their human farmer, hoping to create a society where the 
                                    animals can be equal, free, and happy.
                                    </p>
                                    <p className="book__summary--para">
                                    Unlike other books which may be banned for several reasons, there's 
                                    really only one main reason that Animal Farm has ever been banned: 
                                    the critique of Communism. 
                                    It should be noted that George Orwell, the author, was not a communist, nor was "Animal Farm" 
                                    communist propaganda. On the contrary, Orwell was a Democratic socialist, writing in 1946, 
                                    "Every line of serious work that I have written since 1936 has been written, directly or 
                                    indirectly, against totalitarianism and for democratic socialism, as I understand it"


                                    </p>
                                </div>
                                <button className="btn">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
}

export default BookInfo;