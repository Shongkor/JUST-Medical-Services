import React from 'react';
import Banner from '../../Component/Home/Banner/Banner';
import HomeAppointment from '../../Component/Home/HomeAppointment/HomeAppointment';
import ServiceComponent from '../../Component/Home/ServiceComponent/ServiceComponent';

const Home = () => {
    return (
        <div>
            <Banner />
            <ServiceComponent />
            <HomeAppointment />
        </div>
    );
};

export default Home;