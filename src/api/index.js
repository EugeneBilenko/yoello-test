import axios from 'axios';

const fetchBeers = () => (
  axios
    .get("https://api.punkapi.com/v2/beers")
    .then(({ data }) => data)
);

export default fetchBeers;