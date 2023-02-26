import React from 'react';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';



const App = () => {
  
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Home />
    </>
    
  )
}

export default App


/*
  #### API Call ####

 const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/locations/v3/search',
      params: {q: 'new york'},
      headers: {
        'X-RapidAPI-Key': '1fb536c149mshf88178d32062772p1adecdjsn0d0e21b79ef2',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });



*/