<template>
  <v-footer app>
    <v-spacer></v-spacer>
    <div>
      {{ new Date().getFullYear() }} v{{version}} {{author.name}}
      <v-btn class="dark icon" text small>
        <v-icon size="24px">mdi-vuejs</v-icon>
      </v-btn>
      <v-btn class="dark icon" @click="invertTheme()" text small>
        <v-icon size="24px">mdi-invert-colors</v-icon>
      </v-btn>
      <v-btn class="dark icon" href="https://github.com/sebastienblanchet/portfolio" text small>
        <v-icon size="24px">mdi-github</v-icon>
      </v-btn>
    </div>
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