import store from '@/store/index';
import Vue from "vue";
import translation from "@/assets/translation.json";

Vue.mixin({
  methods: {
    translate(lookup) {
      const d = translation[store.getters.lang];
      return d[lookup] ? d[lookup] : "NaN";
    }
  }
})