import { AxiosInstance } from 'axios';

export type IJSONData = {
    [key:string]:any
  }
  
export const convertFormData = (data:IJSONData):FormData =>{

    const formData = new FormData();
    if(!data) return formData;
    console.log(data)
    Object.keys(data).forEach(function(key) {
      console.log(data[key],key)
      formData.append(key,data[key]);
    });
    return formData
  }
  export const postBasicRequest = (http:AxiosInstance,url:string,data:any,callback:(error:string)=>void)=>{
    return http.post(url,data).catch(error=>{
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        callback(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        callback(error.message);
      } else {
        // Something happened in setting up the request that triggered an Error
        callback(error.message);
      }
    })
}
export const getBasicRequest = (http:AxiosInstance,url:string,data:any,callback:(error:string)=>void)=>{
    return http.get(url,data).catch(error=>{
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        callback(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        callback(error.message);
      } else {
        // Something happened in setting up the request that triggered an Error
        callback(error.message);
      }
    })
  }

  export const getFormRequest = (http:AxiosInstance,url:string,data:any,callback:(error:string)=>void)=>{
    const formData = convertFormData(data);
    return getBasicRequest(http,url,formData,callback);
  }

  export const postFormRequest = (http:AxiosInstance,url:string,data:any,callback:(error:string)=>void)=>{
    const formData = convertFormData(data);
    return postBasicRequest(http,url,formData,callback);
  }