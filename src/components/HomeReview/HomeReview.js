import React from 'react';
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './HomeReview.css';
const HomeReview = (props) => {
    const { review } = props
    const { name, img, comments } = review;
    return (
        <div>
            <h1>{review.length}</h1>
            <div className="col">
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
        </div>
    );
};

export default HomeReview;