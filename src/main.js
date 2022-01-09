import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/main.css";
import VeeValidatePlugin from "./includes/validation";
// import * as apolloProvider from "./apollo.provider"; 
import * as apolloProvider from "./auth/index";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VeeValidatePlugin);
app.use(apolloProvider.apolloProvider);

app.mount("#app");
