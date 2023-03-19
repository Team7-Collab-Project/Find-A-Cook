import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditProfile() {
  const [cookInfo, setCookInfo] = useState({
    cook_first_name: '',
    cook_last_name: '',
    specialties: [],
    description: '',
    profile_picture: '',
    cook_bio: '',
  });

  const [menuCategories, setMenuCategories] = useState([]);

  useEffect(() => {
    const fetchMenuCategories = async () => {
        try {
            const response = await axios.get('http://localhost:5001/cook/menucategories');
            if (response.data.status === 'SUCCESS') {
                setMenuCategories(response.data.menuCategories);
            } else {
                alert('Error fetching menu categories');
            }
        } catch (error) {
            console.error('Error Fetching categories', error);
        }
    };
    fetchMenuCategories();
  }, []);

  const handleSpecialtiesChange = (e) => {
    const selectedSpecialties = Array.from(e.target.selectedOptions, (option) => option.value);
    setCookInfo({ ...cookInfo, specialties: selectedSpecialties });
  };

  const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('profile_picture', file);
  
    try {
      const response = await axios.post('/uploadprofilepicture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.data.status === 'SUCCESS') {
        setCookInfo({ ...cookInfo, profile_picture: response.data.imagePath });
        console.log("success");
        alert('Profile picture uploaded successfully');
      } else {
        alert('Error uploading profile picture');
        console.log("error");
      }
    } catch (error) {
      console.error('Error uploading profile picture:', error);
    }
  };
  

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
        
        <select
          name="specialties"
          multiple={true}
          value={cookInfo.specialties}
          onChange={handleSpecialtiesChange}
        >
          {menuCategories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.category_name}
            </option>
        ))}
      </select>
        
        <textarea
          name="description"
          placeholder='Description'
          value={cookInfo.description}
          onChange={handleChange}
        ></textarea>
        
        <input
          type="file"
          name="profile_picture"
          value={cookInfo.profile_picture}
          onChange={handleProfilePictureChange}
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
