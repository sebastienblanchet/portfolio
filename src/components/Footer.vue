<template>
  <v-footer app dark class="secondary">
    <v-row>
      <v-col cols="auto">{{author.name}}</v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <b>
          <v-icon size="24px">mdi-vuejs</v-icon>
          {{ new Date().getFullYear() }} - v{{version}}
        </b>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-btn class="dark icon" @click="invertTheme()" text small>
          <v-icon size="24px">mdi-invert-colors</v-icon>
        </v-btn>
        <v-btn class="dark icon" href="https://github.com/sebastienblanchet/portfolio" text small>
          <v-icon size="24px">mdi-code-tags</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { version, author, homepage } from "../../package.json";

export default {
  data: () => ({
    version: version,
    author: author,
    github: homepage,
    invert: false
  }),
  methods: {
    invertTheme() {
      // toggle
      this.invert = !this.invert;
      this.$vuetify.theme.dark = this.invert;
    }
  }
};
</script>