import axios from "axios";

const communityFinder = axios.create({
    baseURL: "http://localhost:3123/api/v1/noise-data",
    timeout: 5000,
    headers: {"Content-Type": "application/json"},
});

communityFinder.interceptors.request.use(
    (response) => response,
    (error) => {
        if (error.response?.data?.message) {
            console.log(error.response.data);
        }
        return Promise.reject(error);
    }
);

export default communityFinder;