import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;

export default axios;
