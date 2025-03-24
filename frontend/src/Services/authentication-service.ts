
import { http } from "./axiosComponent";
import {serverData} from "../constants/serverData";

export const signUpWithEmail = async (data: any) => {
  const response = await http.post<any>({
    url: "/user/register-email",
    data
  });
    return response;
  

};

export const signInWithEmail = async (data: any) => {
    const response = await http.post<any>({
        url: "/user/sign-in",
        data
    });
    
    
        return response;
    

}
export const loginWithGoogle = async (data: any) => {
    const response = await http.post<any>({
        url: "/user/login-google",
        data
    });
    return response;
}
export const signUpWithGoogle= async (data: any) => {
    const response = await http.post<any>({url:"/user/register-google",data});
    return response;
}
export const signUpWithWallet = async (data: any) => {
    const response = await http.post<any>({
        url: "/user/register-wallet",
        data
    });
    return response;

}

export const loginWithWallet = async (data: any) => {
    const response = await http.post<any>({
        url: "/user/login-wallet",
        data
    });
    return response;
}