<template>
  <v-footer app dark class="secondary">
    <v-row>
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
        <v-btn class="dark icon" @click="invertTheme()" text small>
          <v-icon size="18px" v-text="theme"></v-icon>
        </v-btn>
        <v-btn class="dark icon" :href="github" text small>
          <v-icon size="18px">mdi-code-tags</v-icon>
        </v-btn>
        <v-btn class="dark icon" :href="bugs" text small>
          <v-icon size="18px">mdi-bug-outline</v-icon>
        </v-btn>
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
    github: homepage,
    invert: false,
    theme: "mdi-rotate-45 mdi-moon-waxing-crescent"
  }),
  computed: {
    bugs: function () {
      return `${this.github}/issues/new`;
    }
  },
  methods: {
    invertTheme() {
      // toggle
      this.invert = !this.invert;

      if(this.invert) {
        this.theme = "mdi-decagram";
      }
      else {
        this.theme = "mdi-rotate-45 mdi-moon-waxing-crescent";
      }

      this.$vuetify.theme.dark = this.invert;
    }
  }
};
</script>