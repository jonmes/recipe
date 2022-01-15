import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/main.css";
import VeeValidatePlugin from "./includes/validation";
// import * as apolloProvider from "./apollo.provider";
import * as apolloProvider from "./auth/index";
import VueAgile from "vue-agile";
import vue3StarRatings from "vue3-star-ratings";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueAgile);
app.component("vue3-star-ratings", vue3StarRatings);
app.use(VeeValidatePlugin);
app.use(apolloProvider.apolloProvider);

app.mount("#app");
