import { http } from "./axiosComponent";

export const addNewBeneficiary = async (data: any) => {
  const response = await http.post<any>({
    url: "/beneficiary",
    data
  });
  
  return response;
};

export const getBeneficiaries = async (data: any) => {
  const response = await http.get<any>({
    url: "/beneficiary"
  });
  
  return response;
};