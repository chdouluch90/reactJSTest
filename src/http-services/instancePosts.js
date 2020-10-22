import axios from 'axios';
export const instancePosts = axios.create({
    baseURL: "https://effy-simple-api.herokuapp.com"
});