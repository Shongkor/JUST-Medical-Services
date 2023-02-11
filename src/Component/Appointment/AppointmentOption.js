import React from 'react';

const AppointmentOption = ({option}) => {
    const {name}=option;
    return (
        <div className='my-2' >
            <div className="card position-static text-center">
                <div className="card-header">
                <h5 className="card-title text-primary">{name}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{option.slots[0]} Slots Available</p>
                    <p className="card-text">{option.slots.length} Space Available</p>
                    <button type="button" className="btn bg-info ">Book Appointment</button>
                </div>

            </div>
        </div>
    );
};

export default AppointmentOption;