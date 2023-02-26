import axios from 'axios';
import React, {useState} from 'react';
import "./home.css";


const Home = () => {
	const [searchCity, setSearchCity] = useState(null);
	const [city, setCity] = useState(null);
	const [checkIn, setCheckIn] = useState(null);
	const [checkOut, setCheckOut] = useState(null);
	const [guests, setGuests] = useState(null);
	const [hotels, setHotels] = useState(null);

	const getDestination = async () => {
		try {
			const res = await axios.get('api/city/', {
				params: {searchCity} ,
			});
			const {data} = res;

			setCity(data.suggestions[0].entities[0].destinationId);
		} catch (error) {
			console.log(error.message);
		}
	};

	const getHotels = async () => {
		try {
			const res = await axios.get('api/hotels/', {
				params: {city, checkIn, checkOut, guests}
			});
			const {data} = res;
			setHotels(data.data.body);
		} catch (error) {
			console.log(error);
		}
	};
  return (
    <div>
      	<div className='search_box'>
			<input
				className='input_search'
				type="text"
				placeholder="Enter your destination city"
				onChange={e => {
					setCity(null);
					setSearchCity(e.target.value);
				}}
			/>
			<div className='search_btn'>
				<button 
					className='search_btn_spec'
					onClick={() => getDestination()}
				>
					Search
				</button>
			</div>
    	</div>
		<div className='search_parms_container'>
			<div className='search_parms'>
				<div className='search_parms_details'>
					<label for="check-in" className='label_content'> Check-in </label>
					<input id="startDate" type="date"  onChange={e => setCheckIn(e.target.value)} />
				</div>
				<div className='search_parms_details'>
					<label for="check-out" className='label_content'> Check-out </label>
					<input id="check-out" type="date" onChange={e => setCheckOut(e.target.value)} />
				</div>
				<div className='search_parms_details'>
					<label for="guests" className='label_content'> Guests </label>
					<input
						id="guests"
						type="number"
						placeholder="Total guests"
						onChange={e => setGuests(e.target.value)}
					/>
				</div>
				<div className='search_btn'>
					<button
						className='search_btn_spec' 
						type="submit" 
						onClick={() => getHotels()}
					>
						Find Hotels
					</button>
				</div>
			</div>
		</div>
  		
	</div>

    
  )
}

export default Home