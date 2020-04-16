import Vue from "vue";
import { mapGetters } from "vuex";
import translation from "@/assets/translation.json";

Vue.mixin({
  computed: {
    ...mapGetters[
    "lang"
    ],
  },
  methods: {
    translate(lookup) {
      console.log(`Translate ${lookup} to ${this.lang}`)
      const d = translation[this.lang];
      return d[lookup] ? d[lookup] : "NaN";
    }
  }
})