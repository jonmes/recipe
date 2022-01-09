<template>
  <div class="hidden">{{ login() }}</div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { signIn, signOut } from "@/auth";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  data() {
    return {
      activeMenu: "Home",
      sidebarOpen: ref(false),
      authval: "",
    };
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const authLoading = computed(() => store.getters["main/isLoading"]);
    const authenticated = computed(() => store.getters["main/isAuthenticated"]);

    async function login() {
      // console.log(authenticated.value);

      await signIn();

      // console.log(authenticated.value);
      if (authenticated.value) {
        router.push({ name: "cook" });
        this.authval = "authpass";
        console.log(this.authval);
      } else {
        router.push({ name: "home" });
      }
    }

    async function logout() {
      await signOut();
    }

    return {
      authLoading,
      authenticated,
      login,
      logout,
    };
  },
};
</script>
