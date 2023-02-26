import axios from "axios";
export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/properties/list",
    params: {
      destinationId: req.query.city,
      pageNumber: "1",
      pageSize: "25",
      checkIn: req.query.checkIn,
      checkOut: req.query.checkOut,
      adults1: req.query.guests,
      sortOrder: "GUEST_RATING",
      locale: "en_US",
      currency: "USD",
    },
    headers: {
      "x-rapidapi-host": "hotels4.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
  };
  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
