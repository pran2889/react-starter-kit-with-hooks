import * as axios from 'axios';

const axiosInstance = (history = null) => {
    let headers = {
        'Content-Type': 'application/json'
    };

    if (localStorage.token) {
        headers.Authorization = `Token ${localStorage.token}`;
    }
    const axiosInstance = axios.create({
        baseURL: process.env.API_URL || `http://62.171.174.53:8090`,
        headers
    });
    axiosInstance.interceptors.request.use((response) =>
        new Promise((resolve, reject) => {
            resolve(response);
        }, (error) => {
            if (!error.response) {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }
            if (error.response.status === 403) {
                localStorage.removeItem(`token`);
                if (history) {
                    history.push("/");
                } else {
                    window.location = "/";
                }
            } else {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }
        }));
    return axiosInstance;
}
export default axiosInstance;
