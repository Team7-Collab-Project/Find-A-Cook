import React, { useEffect, useState } from 'react';
import './../CSS/Test.css'

const Booking = () => {
    const [bookings, setBookings] = useState([]);

    return(
        <>
    <div className="booking-container">
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Delivery Address</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>12345</td>
                <td>Bob Marley</td>
                <td>24 House St</td>
                <td>€55.60</td>
                <td>Confirmed</td>
                <td>20-05-2023</td>
                <td>
                    <button>Accept</button>
                    <button>Decline</button>
                </td>
            </tr>
        </tbody>
        {/* <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.customerName}</td>
              <td>{order.deliveryAddress}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleAccept(order)}>Accept</button>
                <button onClick={() => handleDecline(order)}>Decline</button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>

        </>
    )
}

export default Booking;
