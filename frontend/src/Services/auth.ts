
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/globaltContext';
import config from './apisConfig';
import { toast } from 'react-toastify';



export interface ILogin {
    email: string;
    password: string
}

export const login = async (values: ILogin) => {
    try {
        const endpoint = config.auth.login;
        const res = await Axios.post(endpoint, values);
        const data = JSON.parse(JSON.stringify(res.data.data))
        const token = data.token
        localStorage.setItem("userData", JSON.stringify(res.data.data))
        localStorage.setItem('token', token);
        return data;
    } catch (err) {
        console.log(err)
        return err;
    };
};

export const register = async (payload: any) => {
    try {
        const endpoint = config.auth.register;
        const res = await Axios.post(endpoint, payload)
        const data = res.data;
        return data;
    } catch (err) {
        console.log(err)
        return err;

    }
}
export const socialAuth = async (payload: any) => {
    try {
        const endpoint = config.auth.social;
        const res = await Axios.post(endpoint, payload)
        const data = res.data;
        return data;
    } catch (err) {
        console.log(err)
        return err;

    }
}

// notification
export const createNotification = async (payload: any) => {
    try {
        const endpoint = config.Notification.createNotification;
        const res = await Axios.post(endpoint, payload)
        const data = res.data;
        return data;
    } catch (err) {
        console.log(err)
        return err;

    }
}
export const getNotification = async () => {

    try {
        const endpoint = config.Notification.getNotification;
        const token = localStorage.getItem("token")
        Axios.defaults.headers.common["authorization"] = `Bearer ${token}`
        const res = await Axios.get(endpoint)
        const data = res.data.data
        return data

    } catch (error) {
        console.log(error)
    }
}
// end notification

// History
export const createHistory = async (payload: any) => {
    try {
        const endpoint = config.History.createHistory;
        const res = await Axios.post(endpoint, payload)
        const data = res?.data;
        return data;
    } catch (err) {
        console.log(err)
        return err;

    }
}
export const getHistory = async () => {

    try {
        const endpoint = config.History.getHistory;
        const token = localStorage.getItem("token")
        Axios.defaults.headers.common["authorization"] = `Bearer ${token}`
        const res = await Axios.get(endpoint)
        const data = res.data.data
        return data

    } catch (error) {
        console.log(error)
    }
}
// end History

// Contact
export const createContact = async (payload: any) => {
    try {
        const endpoint = config.Contact.createContact;
        const res = await Axios.post(endpoint, payload)

        const data = res.data;
        return data;
    } catch (err) {
        console.log(err)
        return err;

    }
}
export const getContact = async () => {

    try {
        const endpoint = config.Contact.getContact;
        const token = localStorage.getItem("token")
        Axios.defaults.headers.common["authorization"] = `Bearer ${token}`
        const res = await Axios.get(endpoint)
        const data = res.data.data
        return data

    } catch (error) {
        console.log(error)
    }
}
// end Contact

// trackLocation
export const getTrackLocation = async () => {

    try {
        const endpoint = config.trackLocation.createTrackLocation;
        const token = localStorage.getItem("token")
        Axios.defaults.headers.common["authorization"] = `Bearer ${token}`
        const res = await Axios.get(endpoint)
        const data = res.data.data
        return data

    } catch (error) {
        console.log(error)
    }
}


//findLocation
export const getfindLocation = async () => {

    try {
        const endpoint = config.findLocation.getfindLocation;
        const token = localStorage.getItem("token")
        Axios.defaults.headers.common["authorization"] = `Bearer ${token}`
        const res = await Axios.get(endpoint)
        const data = res.data.data
        return data

    } catch (error) {
        console.log(error)
    }
}



// updateProfile 
export const updateProfile = async (payload: any) => {

    try {
        const endpoint = config.user.update;
        const token = localStorage.getItem("token")
        console.log("🚀 ~ file: auth.ts:184 ~ updateProfile ~ token:", token)
        Axios.defaults.headers.common["authorization"] = `Bearer ${token}`
        debugger
        const res = await Axios.patch(endpoint, payload)
        console.log("datesa", res)
        const data = res.data;

        console.log(data)
    } catch (error: any) {
        if (error?.response?.data?.error) {
            toast.error(error?.response?.data?.error);
        }
        console.log(error)
    }
}
export const signUpWithWallet = async (payload: any) => {
    try {
        const endpoint = config.auth.walletSignup;
        return new Promise((resolve: any, reject: any) => {
            Axios.post(endpoint, payload).then((res: any) => {

                if (!res.data.status) {
                    toast.error(res.data.msg);
                    reject();
                }
                const nonce = res.data.nonce;
                resolve(nonce);
            }).catch((error: any) => { reject(error) });
        })
    } catch (error) {
        console.log("res:::", error);
        console.log(error)
    }
}
export const getNonce = async (payload: any) => {
    try {
        const endpoint = config.auth.getNonce;
        return new Promise((resolve: any, reject: any) => {
            Axios.post(endpoint, payload).then((res: any) => {
                if (!res.data.status) {
                    toast.error(res.data.msg);
                    reject();
                }
                const nonce = res.data.nonce
                resolve(nonce as string);
            }).catch((error: any) => { reject(error) });
        })
    } catch (error) {
        console.log(error)
    }
}
export const signInWithWallet = async (payload: any) => {
    try {
        const endpoint = config.auth.walletLogin;
        return new Promise((resolve: any, reject: any) => {
            Axios.post(endpoint, payload).then((res: any) => {
                if (!res?.data.status) {
                    toast.error(res.data.msg);
                    reject();
                }
                const data = JSON.parse(JSON.stringify(res.data))
                const token = data.token
                localStorage.setItem("userData", JSON.stringify(res.data.data))
                localStorage.setItem('token', token);
                resolve(data.data);
            });
        })
    } catch (error) {
        console.log(error)
    }
}
// getUser
export const getUser = async () => {

    try {
        const endpoint = config.session.getSession;
        const token = localStorage.getItem("token")
        Axios.defaults.headers.common["authorization"] = `Bearer ${token}`
        const res = await Axios.get(endpoint)
        const data = res.data

        return data

    } catch (error) {
        console.log(error)
    }
}


// forgot password
export const forgotPassword = async (payload: any) => {

    try {
        const endpoint = config.forgotpassword.restPassword;
        const res = await Axios.post(endpoint, payload)
        const data = res.data;
        return data;
    } catch (err) {
        console.log(err)
        return err;

    }
};
export const changePassword = async (payload: any) => {

    try {
        const endpoint = config.forgotpassword.changePassword;
        const res = await Axios.post(endpoint, payload)
        const data = res.data;
        return data;
    } catch (err) {
        console.log(err)
        return err;

    }
};

export const verification = async (payload: any) => {

    try {

        const endpoint = config.verified.verified;
        const res = await Axios.post(endpoint, payload)
        const data = res.data;
        return data;

    } catch (err) {
        console.log(err)
        return err;

    }
};
// notification
export const getUsersRole = async (payload: any) => {
    try {
        const endpoint = config.usersRole.getUsersRole;
        const res = await Axios.post(endpoint, payload)
        const data = res.data;
        return data;
    } catch (err) {
        console.log(err)
        return err;

    }
}
export const sendOtp = async (payload: any) => {
    try {
        const endpoint = config.otpAuth.sendOtp;
        const res = await Axios.post(endpoint, payload)
        const data = res.data;
        return data;
    } catch (err) {
        console.log(err)
        return err;

    }
}

export const verifyOtp = async (payload: any) => {
    try {
        const endpoint = config.otpAuth.verifyOtp;
        const res = await Axios.post(endpoint, payload)
        const data = res.data;
        return data;
    } catch (err) {
        console.log(err)
        return err;

    }
}

