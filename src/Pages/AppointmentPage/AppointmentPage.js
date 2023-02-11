import React, { useState } from 'react';
import AppointmentLayout from '../../Component/Appointment/AppointmentLayout';
import AppointmentOption from '../../Component/Appointment/AppointmentOption';
import appointmentFakeData from '../../FakeData/Appointment.json'
const AppointmentPage = () => {

    const [selected, setSelected] = useState(new Date())
    return (
        <div>
            <AppointmentLayout  selected={selected} setSelected={setSelected}/>
            <div className='container d-flex flex-wrap justify-content-evenly my-2'>
                {appointmentFakeData.map(option => <AppointmentOption key={option._id} option={option} />)}
            </div>
        </div>
    );
};

export default AppointmentPage;