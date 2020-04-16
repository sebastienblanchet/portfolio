import Vue from "vue"
import App from "./App.vue"
import store from "@/store"
import vuetify from "@/plugins/vuetify";
import "@/mixins/index" 
import "@/utils/filters";
import "@babel/polyfill"

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app")