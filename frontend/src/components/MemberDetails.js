import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MemberDetails.css';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/members/${id}`);
        console.log('Fetched member:', res.data);
        setMember(res.data);
      } catch (err) {
        setError('Error fetching member details');
        console.error('Error fetching member:', err);
      }
    };
    fetchMember();
  }, [id]);

  if (!member) return <div>Loading...</div>;

  return (
    <div className="member-details-container">
      <h2>Member Details</h2>
      {error && <p className="error">{error}</p>}
      <div className="member-details">
        {member.image && (
          <img
            src={`http://localhost:5000/uploads/${member.image}`}
            alt={member.name}
            className="member-image"
          />
        )}
        <p><strong>Name:</strong> {member.name}</p>
        {member.rollNumber && <p><strong>Roll Number:</strong> {member.rollNumber}</p>}
        {member.year && <p><strong>Year:</strong> {member.year}</p>}
        {member.degree && <p><strong>Degree:</strong> {member.degree}</p>}
        {member.aboutProject && <p><strong>About Project:</strong> {member.aboutProject}</p>}
        {member.hobbies && <p><strong>Hobbies:</strong> {member.hobbies}</p>}
        {member.certificate && <p><strong>Certificate:</strong> {member.certificate}</p>}
        {member.internship && <p><strong>Internship:</strong> {member.internship}</p>}
        {member.aboutYourAim && <p><strong>About Your Aim:</strong> {member.aboutYourAim}</p>}
      </div>
    </div>
  );
}

export default MemberDetails;