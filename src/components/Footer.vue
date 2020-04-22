<template>
  <v-footer
  app
  :inset="!$vuetify.breakpoint.smAndDown"
  :absolute="$vuetify.breakpoint.smAndDown"
  dark
  class="secondary">
    <v-row align="center" class="caption">
      <v-col cols="12" md="4" class="text-center text-md-left font-weight-bold">{{author.name}}</v-col>
      <v-col cols="12" md="4" class="text-center font-weight-bold">
        <IconItem url="https://vuejs.org/v2/guide/" icon="mdi-vuejs" text="vue.js guide" />
        {{ new Date().getFullYear() }} - v{{version}}
      </v-col>
      <v-col cols="12" md="4" class="text-center text-md-right">
        <!-- <IconItem @icon-click="invertLang" size="18" :icon="lang" text="invert lang" /> -->
        <IconItem @icon-click="invertTheme" size="18" :icon="themeIcon" text="invert theme" />
        <IconItem size="18" :url="github" icon="mdi-code-tags" text="report a bug" />
        <IconItem size="18" :url="bugs" icon="mdi-bug-outline" text="see source code" />
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import IconItem from "@/components/ui/IconItem";
import { version, author, homepage } from "../../package.json";

export default {
  components: {
    IconItem
  },
  data: () => ({
    version: version,
    author: author,
    homepage: homepage,
    invert: false,
    themeIcon: "mdi-rotate-45 mdi-moon-waxing-crescent"
  }),
  computed: {
    ...mapGetters([
      "theme",
      "lang",
      "size"
    ]),
    sizeInterface() {
      return this.$vuetify.breakpoint.name;
    },
    github: function() {
      return `${this.homepage}/tree/v${this.version}`;
    },
    bugs: function() {
      return `${this.homepage}/issues`;
    }
  },
  methods: {
    ...mapActions([
      "editTheme",
      "editLang",
      "editSize"
    ]),
    invertTheme() {
      // toggle
      this.invert = !this.invert;

      // extract name and theme
      let name = this.invert ? "dark" : "light";
      this.themeIcon = name === "dark" ? "mdi-decagram" : "mdi-rotate-45 mdi-moon-waxing-crescent";

      // invert theme and write state
      this.$vuetify.theme.dark = this.invert;
      this.editTheme(name);
    },
    // invertLang() {
    //   // toggle language and set
    //   const l = (this.lang == "en") ? "fr" : "en";
    //   this.editLang(l);
    // }
  },
  watch: {
    sizeInterface(value) {
      this.editSize(value);
    }
  }
};
</script>