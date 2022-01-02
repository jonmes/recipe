<template>
  <div class="p-5 h-screen bg-gray-100">
    <h1 class="text-xl mb-2">Users List</h1>
    <div class="overflow-auto rounded-lg shadow">
      <table class="w-full">
        <thead class="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th class="p-3 text-sm font-semibold tracking-width text-left">
              id
            </th>
            <th class="p-3 text-sm font-semibold tracking-width text-left">
              name
            </th>
            <th class="p-3 text-sm font-semibold tracking-width text-left">
              email
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { user_account } from "../queri/queries";

export default {
  apollo: {
    users: user_account,
  },
  data() {
    return {
      users: [],
    };
  },
};
</script>
