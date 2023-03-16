import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
  
    // Collect form data
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      date: date,
      time: time,
    };
  
    // You could validate the form data here before submitting it to the server
  
    // Submit the form data to the server
    fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle the response from the server
        // For example, you could display a success message to the user
        alert('Yuh!')
      })
      .catch((error) => {
        console.error(error);
        alert('Damn')
        // Handle the error
        // For example, you could display an error message to the user
      });
  };


  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          placeholder="First Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          placeholder="Last Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          className="form-control"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          placeholder="Date"
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input
          type="time"
          className="form-control"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          placeholder="Time"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );

};

export default BookingForm;