import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import banner from "../../assets/images/chair.png";
import "./AppointmentLayOut.css";

const AppointmentLayout = ({ selected, setSelected }) => {

    return (

        <div className='AppointmentContainer'>
            <div className='d-flex justify-content-between'>
                <div>

                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}

                    />


                </div>
                <div>
                    <img className='img' src={banner} alt="" />
                </div>
            </div>
            <h3 className='my-5 text-center text-info'>Available Appointment on Date {format(selected, 'PP')}.</h3>
        </div>

    );
};

export default AppointmentLayout;