import { http } from "./axiosComponent";

export const cryptoToCash = async (data: any) => {
  const response = await http.post<any>({
    url: "/transaction/crypto-to-cash",
    data
  });
  
  return response;
};

export const cashToMobile = async (data: any) => {
  const response = await http.post<any>({
    url: "/transaction/cash-to-mobile-money",
    data
  });
  
  return response;
};

export const cashToCrypto = async (data: any) => {
  const response = await http.post<any>({
    url: "/transaction/cash-to-crypto",
    data
  });
  
  return response;
};