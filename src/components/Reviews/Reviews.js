import React, { useEffect } from 'react';
import useReviews from '../../Hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <h2 className='review-title my-4'>Our Customer Says!! </h2>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    reviews.map(review => <Review key={review.id} review={review} ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;