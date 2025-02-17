
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from './apisConfig';
import { toast } from 'react-toastify';


export const getPrice = async (payload: any) => {
    try {
        const endpoint = config.price.getPrice;
        const res = await Axios.post(endpoint, payload);
        const data = JSON.parse(JSON.stringify(res.data))
        return data;
    } catch (err) {
        console.log(err)
        return err;
    };
};

export const calPrice = async (payload: any) => {
    try {
        const endpoint = config.price.calPrice;
        const res = await Axios.post(endpoint, payload);
        const data = JSON.parse(JSON.stringify(res.data))
        return data;
    } catch (err) {
        console.log(err)
        return err;
    };
};



