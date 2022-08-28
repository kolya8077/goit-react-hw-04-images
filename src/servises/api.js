import axios from 'axios';

const API_KEY = '27869333-ebe884c8d87cf53a07508f1e4';
const BASE_URL = 'https://pixabay.com/';

export const fetchData = async (query, page, perPage) => {
  const response = await axios.get(
    `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  return response.data;
};