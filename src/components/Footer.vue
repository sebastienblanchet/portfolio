<template>
  <v-container fluid>
    <!-- TODO fix this -->
    <v-footer inset app dark class="secondary">
      <v-row align="center" class="caption">
        <v-col cols="auto">{{author.name}}</v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <b>
            <IconItem url="https://vuejs.org/v2/guide/" icon="mdi-vuejs" text="vue.js guide" />
            {{ new Date().getFullYear() }} - v{{version}}
          </b>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <IconItem @icon-click="invertTheme" size="18" :icon="theme" text="invert theme" />
          <IconItem size="18" :url="github" icon="mdi-code-tags" text="report a bug" />
          <IconItem size="18" :url="bugs" icon="mdi-bug-outline" text="see source code" />
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
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
    theme: "mdi-rotate-45 mdi-moon-waxing-crescent"
  }),
  computed: {
    github: function() {
      return `${this.homepage}/tree/v${this.version}`;
    },
    bugs: function() {
      return `${this.homepage}/issues`;
    }
  },
  methods: {
    invertTheme() {
      // toggle
      this.invert = !this.invert;

      if (this.invert) {
        this.theme = "mdi-decagram";
      } else {
        this.theme = "mdi-rotate-45 mdi-moon-waxing-crescent";
      }

      this.$vuetify.theme.dark = this.invert;
    }
  }
};
</script>