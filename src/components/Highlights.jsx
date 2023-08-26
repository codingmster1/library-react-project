import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Highlight from "./ui/Highlight";


const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="orange">Library?</span>
                        
                    </h2>
                    
                    <div className="highlight__wrapper">
                        <Highlight icon ={<FontAwesomeIcon icon="bolt"/>} 
                        title="Easy and Quick" 
                        para="Get access instantly!"
                        />
                        <Highlight icon ={<FontAwesomeIcon icon="tags"/>} 
                        title="Affordable" 
                        para="Never pay too much."
                        />
                        <Highlight icon ={<FontAwesomeIcon icon="book-open"/>} 
                        title="HUGE Selection" 
                        para="There's something for everybody in your favorite genre."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights;