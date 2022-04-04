import React from 'react';
import './Home.css'
import image from '../../image/camera.jpg'
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReview';
import HomeReview from '../HomeReview/HomeReview';

const Home = () => {
    const [reviews, setReview] = useReviews([])

    return (
        <div>
            <div className="banner m-5 row ">
                <div className="col-md-6 camera-info" >
                    <h1 className='title'>Your Dream Camera</h1>
                    <p className='description'>This camera is full frame Camera. It's image quality, dynamic range, and color is too better. reasonable size body, good weight, easy menu, high resolution for the price, good battery life, and a very reasonable price for a great camera.</p>
                    <button className='banner-btn'>Explore Picture</button>
                </div>
                <div className="col-md-6 ">
                    <img className='w-100 border border-4' src={image} alt="" />
                </div>
            </div>
            <div>
                <h1 className='reviews-title text-center my-5'>Customer Reviews ({reviews.slice(0, 3).length})</h1>
                <div className='row row-cols-1 row-cols-md-3 g-4 mx-4'>
                    {
                        reviews.slice(0, 3).map(review => <HomeReview key={review.id} review={review}></HomeReview>)
                    }
                </div>
                <div className="see-all my-5 ">
                    <Link className='see-all-btn' to='/reviews'>See all Review</Link >
                </div>
            </div>
        </div>

    );
};

export default Home;