import axios from "axios";
export default async function handler(req, res) {
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
}