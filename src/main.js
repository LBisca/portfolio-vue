import Vue from "vue";
import WebFont from "webfontloader";
import App from "./App.vue";

Vue.config.productionTip = false;

WebFont.load({
  google: {
    families: ["Raleway:300,400,500,600,700", "sans-serif"]
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
