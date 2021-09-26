import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import Team from '../Team/Team';
import './Hospital.css'
// Get Data by calling API
const Hospital = () => {
    const [doctors, setDoctors] = useState([]);
    const [team, setTeam] = useState([])
    useEffect(() => {
        fetch("./doctors-team.json")
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);

    // Add to team Button Data Passing function
    const handleAddTeam = (doctor) => {
        const newTeam = [...team, doctor]
        setTeam(newTeam);
    }
    return (
        <div className="hospital-container">
            <div className="doctors-container">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.key}
                        doctor={doctor}
                        handleAddTeam={handleAddTeam}
                    ></Doctor>)
                }
            </div>
            <div className="dashbord-container">
                <Team
                    team={team}
                ></Team>
            </div>
        </div>
    );
};

export default Hospital;