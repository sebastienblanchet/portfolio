<template>
  <v-footer app dark class="secondary">
    <v-row align="center" class="caption">
      <v-col cols="auto">{{author.name}}</v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <b>
          <IconItem size="18" url="https://vuejs.org/v2/guide/" icon="mdi-vuejs" />
          {{ new Date().getFullYear() }} - v{{version}}
        </b>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-btn class="dark icon" @click="invertTheme()" text icon :size="18">
          <v-icon size="18px" v-text="theme"></v-icon>
        </v-btn>
        <IconItem size="18" :url="github" icon="mdi-code-tags" />
        <IconItem size="18" :url="bugs" icon="mdi-bug-outline" />
      </v-col>
    </v-row>
  </v-footer>
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