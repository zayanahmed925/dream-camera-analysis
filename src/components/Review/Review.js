import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Review.css';

const Review = (props) => {
    const { name, comments, img } = props.review
    return (
        <div className="col">
            <div className="card h-100 ">
                <img src={img} className="card-img-top imag" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{comments}</p>
                    <p>Ratings:
                        <FontAwesomeIcon className='rating' icon={faStar} ></FontAwesomeIcon>
                        <FontAwesomeIcon className='rating' icon={faStar} ></FontAwesomeIcon>
                        <FontAwesomeIcon className='rating' icon={faStar} ></FontAwesomeIcon>
                        <FontAwesomeIcon className='rating' icon={faStar} ></FontAwesomeIcon>
                        <FontAwesomeIcon className='rating' icon={faStar} ></FontAwesomeIcon>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;