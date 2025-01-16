<script setup lang="ts">
import type { Interfaces } from "~/models";
import { apiService } from "~/services";

const customers = ref<Interfaces.ICustomer[]>([]);
const loading = ref<boolean>(false);
const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "address", label: "Address" },
  { key: "company", label: "Company" },
  { key: "action", label: "Action" },
];

const router = useRouter();

onMounted(() => {
  fetchCustomers();
});

async function fetchCustomers() {
  try {
    loading.value = true;
    const response = await apiService.customers.fetchUsers();
    customers.value = response;
  } catch (error) {
  } finally {
    loading.value = false;
  }
}

function redirectToCustomer(id: number) {
  router.push(`/customers/${id}`);
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Customers</h1>
    <div class="grid justify-items-end mt-4">
      <UButton icon="heroicons:user-plus-16-solid">Add Customer</UButton>
    </div>
    <UTable
      class="mt-8"
      :rows="customers"
      :columns="columns"
      :loading="loading"
    >
      <template #address-data="{ row }"
        >{{ row.address.city }}, {{ row.address.street }},
        {{ row.address.zipcode }}
      </template>
      <template #company-data="{ row }">{{ row.company.name }} </template>
      <template #action-data="{ row }"
        ><UButton
          icon="i-heroicons-pencil-square"
          size="sm"
          color="sky"
          variant="ghost"
          label="View"
          :trailing="false"
          @click="redirectToCustomer(row.id)"
        />
      </template>
    </UTable>
  </div>
</template>

<style lang="scss" scoped></style>
