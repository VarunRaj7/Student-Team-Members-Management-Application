import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewMembers.css';

function ViewMembers() {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get('/api/members');
        console.log('Fetched members:', res.data);
        setMembers(res.data);
      } catch (err) {
        setError('Error fetching members');
        console.error('Error fetching members:', err);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className="view-members-container">
      <h2>Team Members</h2>
      {error && <p className="error">{error}</p>}
      <div className="members-list">
        {members.map((member) => (
          <div key={member._id} className="member-card">
            {member.image && (
              <img
                src={`http://localhost:5000/uploads/${member.image}`}
                alt={member.name}
                className="member-image"
              />
            )}
            <h3>{member.name}</h3>
            {member.rollNumber && <p><strong>Roll Number:</strong> {member.rollNumber}</p>}
            {member.year && <p><strong>Year:</strong> {member.year}</p>}
            {member.degree && <p><strong>Degree:</strong> {member.degree}</p>}
            {member.aboutProject && <p><strong>About Project:</strong> {member.aboutProject}</p>}
            <Link to={`/member/${member._id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMembers;