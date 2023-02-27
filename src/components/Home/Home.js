import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./home.css";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [bookings, setBookings] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBooking = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      idNumber: uuidv4(),
      bookingType: bookingType,
    };
    setBookings([...bookings, newBooking]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setBookingType("");
  };


  const handleEdit = (id) => {
    const bookingToEdit = bookings.find((booking) => booking.idNumber === id);
    setFirstName(bookingToEdit.firstName);
    setLastName(bookingToEdit.lastName);
    setEmail(bookingToEdit.email);
    setBookingType(bookingToEdit.bookingType);
    setBookings(bookings.filter((booking) => booking.idNumber !== id));
  };

  const handleDelete = (id) => {
    setBookings(bookings.filter((booking) => booking.idNumber !== id));
  };

  return (
    <>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label className="booking-form__label">
          First Name:
          <input
            className="booking-form__input"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label className="booking-form__label">
          Last Name:
          <input
            className="booking-form__input"
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <label className="booking-form__label">
          Email:
          <input
            className="booking-form__input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label className="booking-form__label">
          Type of Booking:
          <select
            className="booking-form__select"
            value={bookingType}
            onChange={(event) => setBookingType(event.target.value)}
          >
            <option value="">Select a booking type</option>
            <option value="flight">Flight</option>
            <option value="hotel">Hotel</option>
            <option value="car rental">Car Rental</option>
          </select>
        </label>
        <button className="booking-form__button" type="submit">
          Submit
        </button>
      </form>

      <div className="booking-list">
        <h2>Bookings:</h2>
        <ul className="booking-list__items">
          {bookings.map((booking) => (
            <li key={booking.idNumber}>
              <div>First Name: {booking.firstName}</div>
              <div>Last Name: {booking.lastName}</div>
              <div>Email: {booking.email}</div>
              <div>ID Number: {booking.idNumber}</div>
              <div>Type of Booking: {booking.bookingType}</div>
			  <div onClick={() => handleDelete(booking.idNumber)}>Delete</div>
			  <div onClick={() => handleEdit(booking.idNumber)}>Edit</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
