import React from 'react';
import './Home.css'
import image from '../../image/camera.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
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
                <Link to='/reviews'>Review</Link >
            </div>
        </div>

    );
};

export default Home;