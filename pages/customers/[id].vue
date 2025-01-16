<script setup lang="ts">
import type { Interfaces } from "~/models";
import { apiService } from "~/services";

const route = useRoute();
const loading = ref<boolean>(false);
let customerForm = reactive<Partial<Interfaces.ICustomer>>({});

onMounted(() => {
  fetchCustomerById();
});

async function fetchCustomerById() {
  try {
    const customerId = +route.params.id;

    loading.value = true;
    const res = await apiService.customers.fetchUserById(customerId);
    Object.assign(customerForm, res);
  } catch (error) {
  } finally {
    loading.value = false;
  }
}

async function updateCustomer() {
  try {
    const response = await apiService.customers.updateUser(customerForm);
  } catch (error) {}
}
</script>

<template>
  <section>
    <h1 class="text-3xl font-bold mb-8">
      Customer: <span class="text-2xl">{{ customerForm.name }}</span>
    </h1>
    <UForm :state="customerForm" class="space-y-4" @submit="updateCustomer">
      <UFormGroup label="Email" name="email">
        <UInput v-model="customerForm.email" />
      </UFormGroup>

      <UFormGroup label="Name" name="name">
        <UInput v-model="customerForm.name" />
      </UFormGroup>

      <UFormGroup label="Username" name="username">
        <UInput v-model="customerForm.username" />
      </UFormGroup>

      <UFormGroup label="Phone" name="phone">
        <UInput v-model="customerForm.phone" />
      </UFormGroup>

      <UFormGroup label="Website" name="website">
        <UInput v-model="customerForm.website" />
      </UFormGroup>
      <UButton type="submit"> Submit </UButton>
    </UForm>
  </section>
</template>

<style scoped></style>
