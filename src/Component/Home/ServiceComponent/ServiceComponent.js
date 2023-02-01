import React from 'react';
import './ServiceContainer.css'
import theeth from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'


const ServiceComponent = () => {
    return (
        <div className='container ServiceContainer'>
            <div className='text-center my-4'>
                <h4>OUR SERVICES</h4>
                <h2 className='my-2'>Services We Provide</h2>
            </div>
            <div className='d-flex serviceDiv'>
                <div>
                    <img src={theeth} alt="" />
                    <h5>Fluoride Treatment</h5>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
                <div>
                    <img src={cavity} alt="" />
                    <h5>Cavity Filling</h5>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
                <div>
                    <img src={whitening} alt="" />
                    <h5>Teeth Whitening</h5>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceComponent;