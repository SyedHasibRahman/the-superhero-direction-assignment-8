import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './Doctor.css';
// Show card to UI 
const Doctor = (props) => {
    const { picture, name, Categories, salary, phone, address } = props.doctor;
    const element = <FontAwesomeIcon icon={faPlusSquare} />
    return (
        <div className="doctor-cart">
            <div>
                <div className="images">
                    <img src={picture} alt="" />
                </div>
                <h4>{name}</h4>
                <h5>Best as {Categories}</h5>
                <p>Salary: ${salary}</p>
                <p>Call: {phone}</p>
                <address>Location: {address}</address>
                <button onClick={() => props.handleAddTeam(props.doctor)}>{element} Add To Team</button>
            </div>
        </div>
    );
};

export default Doctor;