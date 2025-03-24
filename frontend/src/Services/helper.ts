import {toast } from 'react-toastify';


// Tri


export const errorResponseHandler = (res: any) => {
    console.log(typeof res.errors.FV,"from error response handler")
    if(!res.errors){
        return []
    }
    if(res.errors.FV){
        
var errors=[];
                res.errors.FV.forEach(([key, value]: [string, any]) => {
               
                    console.log(key, value);
                    var errorMessage: string = "";
                    value.map((val: any) => {
                        errorMessage += val.toString() + "\n";
                    });
                    errors.push(errorMessage);
                    
                });
                return errors;
    
    }
    return []
}