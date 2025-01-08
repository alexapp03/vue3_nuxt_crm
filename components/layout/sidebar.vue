<template>
  <aside class="bg-gray-800 flextext-white">
    <NuxtLink class="mx-auto" to="/">
      <NuxtImg src="/logo_crm.png" width="220px" />
    </NuxtLink>
    <UVerticalNavigation
      :ui="{ padding: 'px-3 py-2', size: 'text-lg' }"
      class="mt-8"
      :links="links"
    />
  </aside>
</template>

<script lang="ts" setup>
const links = [
  {
    label: "Profile",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/739984?v=4",
    },
    badge: 100,
  },
  {
    label: "Customers",
    icon: "i-heroicons-users",
    to: "/customers",
  },
];
</script>
