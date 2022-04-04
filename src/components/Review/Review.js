import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Review.css';

const Review = (props) => {
    const { name, comments, img } = props.review
    return (
        <div className="col review-container ">
            <div className="review-img">
                <img src={img} className="card-img-top imag" alt="Avatar" />
            </div>
            <div className="review-info">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{comments}</p>
                <Rating
                    initialRating={3.5}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                >

                </Rating>
            </div>

        </div>
    );
};

export default Review;