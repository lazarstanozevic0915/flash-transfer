import axios from "axios";
import { config } from '../config/config';
axios.defaults.baseURL = config.BACKEND_URL + '/api';

const restApi = {
  setAuthToken: (token: string) => {
    axios.defaults.headers.common.Authorization = token;
  },
}

export { restApi };