import axios from "axios";
/* export default async function searchLocations(req, res) {
  const options = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/locations/v3/search",
    params: { query: req.query.searchCity, locale: "en_US", currency: "USD" },
    headers: {
      "x-rapidapi-host": "hotels4.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY, //"put your API key here"
    },
  };
  axios
    .request(options)
    .then(function (response) {
        
      res.status(200).json(response.data);
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
} */



// API component
export default async function searchLocations(searchCity) {
  try {
    const options = {
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/locations/v3/search",
      params: { q: searchCity, locale: "en_US", currency: "USD" },
      headers: {
        'X-RapidAPI-Key': '34674bdf14msh0be7f976c43b25fp191cd9jsne04e8bce6bbf',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    console.log(response.status); // log the response status
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}



