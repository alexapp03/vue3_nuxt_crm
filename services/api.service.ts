import * as EndPoints from "./api";

class ApiService {
  customers: EndPoints.ApiCustomers;

  constructor() {
    // Initialize all the endpoints
    this.customers = new EndPoints.ApiCustomers();
  }
}

export const apiService = new ApiService();
