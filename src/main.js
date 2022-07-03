import { createApp } from "vue";
// import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bus from "./bus/bus";
createApp(App).use(store).use(router).use(bus).mount("#app");