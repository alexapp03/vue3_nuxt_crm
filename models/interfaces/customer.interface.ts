import { Interfaces } from "..";

export interface ICustomer {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Interfaces.ICompanyAddress;
  phone: string;
  website: string;
  company: Interfaces.ICustomerCompany;
}
