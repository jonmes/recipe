<template>
  <nav
    class="flex justify-between items-center py-6 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24 z-49"
  >
    <router-link
      :to="{ name: 'home' }"
      class="text-3xl md:text-4xl font-bold tracking-wide"
    >
      <span
        class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green relative inline-block"
        ><span class="relative">r</span>
        <span class="relative text-green-200">E</span>
        <span class="relative">cipe</span>
      </span>
    </router-link>
    <div
      class="inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14"
      :class="sidebarOpen ? 'fixed flex' : 'hidden'"
    >
      <ul
        class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8"
      >
        <li
          class="text-lg md:text-base lg:text-lg font-medium group"
          :class="{ 'text-green': activeMenu === 'home' }"
        >
          <router-link :to="{ name: 'home' }"> Home </router-link>
          <div
            class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
          />
        </li>
        <li
          class="text-lg md:text-base lg:text-lg font-medium group"
          :class="{ 'text-green': activeMenu === 'about' }"
        >
          <router-link :to="{ name: 'about' }"> About </router-link>
          <div
            class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
          />
        </li>

        <li
          class="text-lg md:text-base lg:text-lg font-medium group"
          :class="{ 'text-green': activeMenu === 'Login/SignUp' }"
          v-if="!authLoading"
        >
          <!-- <router-link to="/about" @click="checkMenu('Login/SignUp')">
            Login/SignUp
          </router-link> -->
          <button v-if="!authenticated" @click="login">Login</button>
          <button v-if="authenticated" @click="logout">Logout</button>

          <!-- <div v-if="!authLoading">
          </div> -->
          <!-- <p v-if="authenticated">Redirecting to Home...</p> -->
          <!-- <div v-else @click="logout">Logout</div> -->
          <div
            class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
          />
        </li>
      </ul>
      <router-link
        class="flex justify-center items-center h-13 px-7 font-medium text-white bg-green rounded-xl hover:shadow-primary transition-shadow duration-300 whitespace-nowrap"
        :to="{ name: 'recipe' }"
      >
        Explore recipes 🔎
      </router-link>
    </div>
    <button
      @click="sidebarOpen = !sidebarOpen"
      class="block md:hidden relative z-30"
    >
      <!-- <img :src="hamburgerIcon" /> -->
      <p>🔽</p>
    </button>
  </nav>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { signIn, signOut } from "@/auth";
import { useRouter } from "vue-router";

export default {
  name: "HeaderNav",
  data() {
    return {
      activeMenu: "Home",
      sidebarOpen: ref(false),
    };
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const authLoading = computed(() => store.getters["main/isLoading"]);
    const authenticated = computed(() => store.getters["main/isAuthenticated"]);

    async function login() {
      console.log(authenticated.value);

      await signIn();

      console.log(authenticated.value);
      if (authenticated.value) {
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
