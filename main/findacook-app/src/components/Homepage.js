import React, { useState, useEffect } from "react";
import axios from "axios";
import Cook from './Something/Cook'
import './Something/Cook.css'
import { DatePicker } from 'antd';
import moment from 'moment';


const Homepage = () => {
  const [cooks, setCooks] = useState([]);
  const [bookingDate, setBookingDate] = useState();
  const [cuisine, setCuisine] = useState('');
  const [dish, setDish] = useState('');

  useEffect(() => {
    fetchCooks();
  }, []);

  const fetchCooks = async () => {
    try {
      const response = await axios.get("http://localhost:5001/cook/allcooks");
      setCooks(response.data.cooks);
    } catch (error) {
      console.error("Error fetching cooks:", error);
    }
  };

  const handleCuisineChange = (event) => {
    setCuisine(event.target.value);
  };

  const handleDishChange = (event) => {
    setDish(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/cook/searchhh", {
        type: "cuisine", // or type: "dish"
        query: { cuisine: cuisine, dish: dish }
      });
      setCooks(response.data.cooks);
    } catch (error) {
      console.error("Error searching for cooks:", error);
    }
  };

  const filterByDate = (dates) => {
    const date = dates.format('DD-MM-YYYY');
    setBookingDate(date);
  };

  return (
    <>
      <div>
        <nav className="">
          <DatePicker format={'DD-MM-YYYY'} onChange={filterByDate} />
          <form className="search-container" onSubmit={handleSearch}>
            <input
              id="search-cuisine"
              type="search"
              placeholder="Search by cuisine..."
              name="search-cuisine"
              value={cuisine}
              onChange={handleCuisineChange}
            />
            <input
              id="search-dish"
              type="search"
              placeholder="Search by dish..."
              name="search-dish"
              value={dish}
              onChange={handleDishChange}
            />
            <button
              className=""
              type="submit"
              disabled={!cuisine && !dish}
            >
              Search
            </button>
          </form>
        </nav>
      </div>
  
      <div class="test-container">
        <div class="profile-info">
          <div class="product-section">
            {cooks.map((cook, index) => (
              <Cook key={cook._id} cook={cook} bookingDate={bookingDate} />
            ))}
          </div>   
        </div>   
      </div>
    </>
  );
};

export default Homepage;
