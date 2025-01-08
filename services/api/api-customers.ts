import type { Interfaces } from "~/models";

export class ApiCustomers {
  async fetchUsers(): Promise<Interfaces.ICustomer[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  }
}
