import type { Interfaces } from "~/models";

export class ApiCustomers {
  async fetchUsers(): Promise<Interfaces.ICustomer[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  }

  async updateUser(
    userForm: Partial<Interfaces.ICustomer>
  ): Promise<Interfaces.ICustomer> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userForm.id}`,
      {
        method: "PUT",
        body: JSON.stringify(userForm),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    return response.json();
  }

  async fetchUserById(id: number): Promise<Interfaces.ICustomer> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.json();
  }
}
