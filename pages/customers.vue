<script setup lang="ts">
import type { Interfaces } from "~/models";
import { apiService } from "~/services";

const customers = ref<Interfaces.ICustomer[]>([]);
const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "address", label: "Address" },
  { key: "company", label: "Company" },
];

onMounted(() => {
  fetchCustomers();
});

async function fetchCustomers() {
  const response = await apiService.customers.fetchUsers();
  customers.value = response;
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Customers</h1>
    <UTable class="mt-8" :rows="customers" :columns="columns">
      <template #address-data="{ row }"
        >{{ row.address.city }}, {{ row.address.street }},
        {{ row.address.zipcode }}
      </template>
      <template #company-data="{ row }">{{ row.company.name }} </template>
    </UTable>
  </div>
</template>

<style lang="scss" scoped></style>
