import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddMember.css';

function AddMember() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    year: '',
    degree: '',
    aboutProject: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aboutYourAim: '',
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      setError('Name is required');
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('rollNumber', formData.rollNumber);
    data.append('year', formData.year);
    data.append('degree', formData.degree);
    data.append('aboutProject', formData.aboutProject);
    data.append('hobbies', formData.hobbies);
    data.append('certificate', formData.certificate);
    data.append('internship', formData.internship);
    data.append('aboutYourAim', formData.aboutYourAim);
    if (image) data.append('image', image);

    console.log('Submitting form data:', Object.fromEntries(data));

    try {
      const response = await axios.post('/api/members', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Success response:', response.data);
      navigate('/view-members');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to add member. Please try again.';
      setError(errorMessage);
      console.error('Error adding member:', err.response || err);
    }
  };

  return (
    <div className="add-member-container">
      <h2>Add Team Member</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="rollNumber"
          placeholder="Roll Number"
          value={formData.rollNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={formData.degree}
          onChange={handleChange}
        />
        <textarea
          name="aboutProject"
          placeholder="About Project"
          value={formData.aboutProject}
          onChange={handleChange}
        />
        <input
          type="text"
          name="hobbies"
          placeholder="Hobbies (comma separated)"
          value={formData.hobbies}
          onChange={handleChange}
        />
        <input
          type="text"
          name="certificate"
          placeholder="Certificate"
          value={formData.certificate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="internship"
          placeholder="Internship"
          value={formData.internship}
          onChange={handleChange}
        />
        <textarea
          name="aboutYourAim"
          placeholder="About Your Aim"
          value={formData.aboutYourAim}
          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default AddMember;