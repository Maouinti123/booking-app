/* import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./home.css";
 import searchLocations from "../../pages/api/city";

const Home = () => {
  const [searchCity, setSearchCity] = useState("");
  const [city, setCity] = useState([]);
     const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(null);
  const [hotels, setHotels] = useState(null); 

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [bookings, setBookings] = useState([]);

  const getDestination = async () => {
    try {
      const result = await searchLocations(searchCity);
       const randomIndex = Math.floor(Math.random() * result.sr.length);
		const randomResult = result.sr[randomIndex]; 
      setCity(result.sr);
    } catch (error) {
      console.log(error.message);
    }
  }; 

   console.log(city) 

    const getHotels = async () => {
    try {
      const res = await axios.get("api/hotels/", {
        params: { city, checkIn, checkOut, guests },
      });
      const { data } = res;
      setHotels(data.data.body);
    } catch (error) {
      console.log(error);
    }
  }; 

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
	  setFirstName('');
	  setLastName('');
	  setEmail('');
	  setIdNumber('');
	  setBookingType('');
  };
  return (
    <>
      {<div className="search_box">
        <input
          className="input_search"
          type="text"
          placeholder="Enter your destination city"
          onChange={(e) => setSearchCity(e.target.value)}
          value={searchCity}
        />
        <div className="search_btn">
          <button className="search_btn_spec" onClick={getDestination}>
            Search
          </button>
        </div>
      </div> }

      <br />

      <center>
        {city.map((cities) => {
          return <li key={cities.gaiaId}>{cities.regionNames.fullName}</li>;
        })}
      </center>
      { <div className="search_parms_container">
        <div className="search_parms">
          <div className="search_parms_details">
            <label for="check-in" className="label_content">
              {" "}
              Check-in{" "}
            </label>
            <input
              id="startDate"
              type="date"
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="search_parms_details">
            <label for="check-out" className="label_content">
              {" "}
              Check-out{" "}
            </label>
            <input
              id="check-out"
              type="date"
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div className="search_parms_details">
            <label for="guests" className="label_content">
              {" "}
              Guests{" "}
            </label>
            <input
              id="guests"
              type="number"
              placeholder="Total guests"
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div className="search_btn">
            <button
              className="search_btn_spec"
              type="submit"
              onClick={() => getHotels()}
            >
              Find Hotels
            </button>
          </div>
        </div>
      </div> }

<form className="booking-form" onSubmit={handleSubmit}>
      <label className="booking-form__label">
        First Name:
        <input className="booking-form__input" type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      </label>
      <label className="booking-form__label">
        Last Name:
        <input className="booking-form__input" type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
      </label>
      <label className="booking-form__label">
        Email:
        <input className="booking-form__input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label className="booking-form__label">
        ID Number:
        <input className="booking-form__input" type="text" value={idNumber} onChange={(event) => setIdNumber(event.target.value)} />
      </label>
      <label className="booking-form__label">
        Type of Booking:
        <select className="booking-form__select" value={bookingType} onChange={(event) => setBookingType(event.target.value)}>
          <option value="">Select a booking type</option>
          <option value="flight">Flight</option>
          <option value="hotel">Hotel</option>
          <option value="car rental">Car Rental</option>
        </select>
      </label>
      <button className="booking-form__button" type="submit">Submit</button>
    </form>

	<div className="booking-list">
        <h2>Bookings:</h2>
        <ul className="booking-list__items">
          {bookings.map((booking, index) => (
            <li key={index}>
              <div>First Name: {booking.firstName}</div>
              <div>Last Name: {booking.lastName}</div>
              <div>Email: {booking.email}</div>
              <div>ID Number: {booking.idNumber}</div>
              <div>Type of Booking: {booking.bookingType}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
 */