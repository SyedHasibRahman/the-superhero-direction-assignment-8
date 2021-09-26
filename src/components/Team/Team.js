import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPray } from '@fortawesome/free-solid-svg-icons'
import './Team.css'

// Team Details section 
const Team = (props) => {
    const { team } = props;
    const teams = props.team;
    let total = 0;
    for (const detail of team) {
        total = total + parseFloat(detail.salary);
    }
    const element = <FontAwesomeIcon icon={faPray} />
    return (
        <div>
            <h2>{element}Team Details</h2>
            <h4>Total Doctors: {team.length}</h4>
            <p>Total Salaries: ${total.toFixed(2)}</p>
            {
                teams.map(details => <Details
                    key={details.key}
                    details={details}
                ></Details>)
            }
        </div>
    );
};

const Details = (props) => {
    const { picture, name } = props.details;
    return (
        <div className="details">
            <img src={picture} alt="" />
            <h4>{name}</h4>
        </div>
    );
}
export default Team;