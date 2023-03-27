import React, { useState, useEffect } from "react";
import axios from "axios";
import Cook from './Something/Cook'
import './Something/Cook.css'
import { DatePicker } from 'antd';
import moment from 'moment';


const Homepage = () => {
  // Define state variables for the component
  const [cooks, setCooks] = useState([]); // array of cook objects
  const [bookingDate, setBookingDate] = useState(); // selected booking date
  const [searchValue, setSearchValue] = useState(''); // search input value

  // Use an effect hook to fetch cooks data on component mount
  useEffect(() => {
    fetchCooks();
  }, []);

  // Async function to fetch cooks data from server
  const fetchCooks = async () => {
    try {
      const response = await axios.get("http://localhost:5001/cook/allcooks");
      setCooks(response.data.cooks); // set the state with the data
    } catch (error) {
      console.error("Error fetching cooks:", error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      let response;
      if (searchValue === '') { // if search input is empty, fetch all cooks
        response = await axios.get("http://localhost:5001/cook");
      } else { // otherwise, search by cuisine or dish
        console.log("searchValue:", searchValue);
        const trimmedSearchValue = searchValue.trim(); // trim the search value
        response = await axios.post("http://localhost:5001/cook/searchcooks", {
          type: 'both',
          query: trimmedSearchValue
        });
      }
      setCooks(response.data.cooks); // set the state with the search result
    } catch (error) {
      console.error("Error searching for cooks:", error);
    }
  };
  
  
  
  
  // Async function to clear the search and fetch all cooks
  const handleClearSearch = async () => {
    setSearchValue('');
    try {
      const response = await axios.get("http://localhost:5001/cook/allcooks");
      setCooks(response.data.cooks); // set the state with all the cooks
    } catch (error) {
      console.error("Error fetching cooks:", error);
    }
  };

  // Function to handle the booking date selection
  const filterByDate = (dates) => {
    const date = dates.format('DD-MM-YYYY');
    setBookingDate(date); // set the state with the selected date
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