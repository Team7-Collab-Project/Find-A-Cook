import React, { useState, useEffect } from "react";
import axios from "axios";
import Cook from './Something/Cook'
import './Something/Cook.css'
import { DatePicker } from 'antd';
import moment from 'moment';


const Homepage = () => {
  const [cooks, setCooks] = useState([]);
  const [bookingDate, setBookingDate] = useState();
  const [searchValue, setSearchValue] = useState('');

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

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      let response;
      if (searchValue === '') {
        response = await axios.get("http://localhost:5001/cook");
      } else {
        response = await axios.post("http://localhost:5001/cook/searchhh", {
          type: searchValue.includes(' ') ? 'dish' : 'cuisine', // set type based on input
          query: searchValue.includes(' ')
            ? { dish: searchValue } // for dish queries
            : { cuisine: searchValue } // for cuisine queries
        });
      }
      setCooks(response.data.cooks);
    } catch (error) {
      console.error("Error searching for cooks:", error);
    }
  };
  
  const handleClearSearch = async () => {
    setSearchValue('');
    try {
      const response = await axios.get("http://localhost:5001/cook/allcooks");
      setCooks(response.data.cooks);
    } catch (error) {
      console.error("Error fetching cooks:", error);
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
              id="search"
              type="search"
              placeholder="Search by cuisine or dish..."
              name="search"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <button
              className=""
              type="submit"
              disabled={!searchValue}
            >
              Search
            </button>
            <button
              className="clearSearch"
              type="button"
              onClick={handleClearSearch}
              disabled={searchValue === ''}
            >
              Clear Search
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