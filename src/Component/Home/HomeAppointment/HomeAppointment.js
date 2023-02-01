import React from 'react';
import  './HomeAppointment.css'
import DoctorImage from '../../../assets/images/doctor-small.png'
const HomeAppointment = () => {
    return (
        <div className='HomeAppointmentContainer'>
            <div className='row align-content-center align-items-center'>
                <div className='col-md-6'>
                    <img src={DoctorImage} alt="doctor" />
                </div>
                <div className='col-md-6'>
                    <h5 className='appointmentHeading'>Appointment</h5>
                    <h2 className='my-2'>Make an appointment Today</h2>
                    <p className='my-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button type="button" className="btn bg-info bg-opacity-50">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;