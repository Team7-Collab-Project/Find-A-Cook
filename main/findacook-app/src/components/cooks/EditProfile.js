import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditProfile() {
  const [cookInfo, setCookInfo] = useState({
    cook_first_name: '',
    cook_last_name: '',
    specialties: '',
    description: '',
    profile_picture: '',
    cook_bio: '',
  });

  useEffect(() => {
    // Fetch cook information here and populate the state
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCookInfo({ ...cookInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:5001/cook/editprofile', cookInfo);
      if (response.data.status === 'SUCCESS') {
        alert('Profile updated successfully');
      } else {
        alert('Error updating profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="cook_first_name"
          placeholder='First Name'
          value={cookInfo.cook_first_name}
          onChange={handleChange}
        />
        
        <input
          type="text"
          name="cook_last_name"
          placeholder='Last Name'
          value={cookInfo.cook_last_name}
          onChange={handleChange}
        />
        
        <input
          type="text"
          name="specialties"
          placeholder='speacialties'
          value={cookInfo.specialties}
          onChange={handleChange}
        />
        
        <textarea
          name="description"
          placeholder='Description'
          value={cookInfo.description}
          onChange={handleChange}
        ></textarea>
        
        <input
          type="text"
          name="profile_picture"
          
          value={cookInfo.profile_picture}
          onChange={handleChange}
        />
        
        <textarea
          name="cook_bio"
          placeholder='Biography'
          value={cookInfo.cook_bio}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfile;
