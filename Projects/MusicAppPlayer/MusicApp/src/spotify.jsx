import axios from 'axios';

const endpoint = "https://accounts.spotify.com/authorize?";
const clientId = "827b7d5e22f445759be67adea6faa2c7";
const redirectUrl = "http://localhost:5173";
const scope = ["user-library-read", "playlist-read-private"];

export let loginendpoint = `${endpoint}client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
    "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});
export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};


export default apiClient;
