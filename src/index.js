import Avataaars from "./Avataaars.vue";

export default {
  install(app, options) {
    // Let's register our component globally
    // https://v3.vuejs.org/guide/component-registration.html#global-registration
    app.component("avataaars", Avataaars);
  }
};