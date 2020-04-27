import store from '@/store/index';
import Vue from "vue";
import translation from "@/assets/translation.json";

Vue.mixin({
  methods: {
    translate(lookup, lang) {
      lang = lang || store.getters.lang;
      const d = translation[lang];
      return d[lookup] ? d[lookup] : lookup;
    }
  }
})