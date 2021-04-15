import Axios from 'axios';

const SHOW_ENDPOINT = `https://jsonplaceholder.typicode.com/`;

const baseAPI = Axios.create({
    baseURL: `${SHOW_ENDPOINT}/`
})

export { baseAPI }