import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Review.css';

const Review = (props) => {
    const { name, comments, img } = props.review
    return (
        <div className="col ">
            <div className="review-img">
                <img src={img} className="card-img-top imag" alt="Avatar" />
            </div>
            <div className="">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{comments}</p>
                <Rating initialRating={3.5}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly>
                </Rating>
            </div>

        </div>
    );
};

export default Review;