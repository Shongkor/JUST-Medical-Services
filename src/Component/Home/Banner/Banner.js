import React from 'react';
import './Banner.css'
import carouselBackground1 from '../../../assets/images/chair.png';
const Banner = () => {
    return (
        <div>
            <div className='container d-flex align-items-center'>
                <div className='bannerFont'>
                    <h2>Your New Smile Starts Here</h2>
                    <p className='py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button type="button" className="btn btn-info bg-opacity-50">Get Started</button>
                </div>
                <div>
                    <img className='bannerIMG w-1/2' src={carouselBackground1} alt="Chair" />
                </div>
            </div>
            <div className='container my-5 d-flex justify-content-evenly align-items-center info'>
                <section className='info1 d-flex'>
                    <i className="bi bi-clock-fill"></i>
                    <div>
                        <h5>Opening Hours</h5>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </section>
                <section className='info2 d-flex'>
                    <i className="bi bi-geo-alt-fill"></i>
                    <div>
                        <h5>Visit our location</h5>
                        <p>Brooklyn, NY 10036, United States</p>
                    </div>
                </section>
                <section className='info3 d-flex'>
                    <i className="bi bi-telephone-outbound-fill"></i>
                    <div>
                        <h5>Contact us now</h5>
                        <p>+000 123 456789</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;