<template>
  <div
    class="w-full min-h-screen font-sans relative text-gray-900 bg-gradient-to-br from-transparent to-green-100"
    :class="sidebarOpen ? 'overflow-hidden h-screen' : ''"
  >
    <div
      class="fixed px-3 py-2 text-sm font-bold text-white bg-gray-900 rounded bottom-4 left-4 z-50"
    >
      <span class="sm:hidden">DEFAULT</span>
      <span class="hidden sm:inline-block md:hidden">SM</span>
      <span class="hidden md:inline-block lg:hidden">MD</span>
      <span class="hidden lg:inline-block xl:hidden">LG</span>
      <span class="hidden xl:inline-block">XL</span>
    </div>
    <HeaderNav />
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import { ref } from "vue";
import HeaderNav from "./views/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {
      activeMenu: "Home",
      menus: ["Home", "Contact Us", "Login"],
      sidebarOpen: ref(false),
    };
  },
  components: {
    HeaderNav,
    Footer,
  },
};
</script>
