import { createApp } from "vue";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld";
import About from "./components/about";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/about",
      component: About
    },
    {
      path: "/",
      component: HelloWorld
    }
  ]
});
const app = createApp(App);
app.use(router);

app.mount("#app");
// createApp(App).mount('#app')
