import axios from 'axios';

const Axios = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
});

Axios.interceptors.response.use(
	(res) => {
		return res.data;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default Axios;
