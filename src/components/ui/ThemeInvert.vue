<template>
  <v-btn text @click="invertTheme">
    <v-icon v-text="themeIcon"></v-icon>
  </v-btn>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
  },
  data: () => ({
    invert: false,
    themeIcon: "mdi-rotate-45 mdi-moon-waxing-crescent"
  }),
  computed: {
    ...mapGetters([
      "theme",
      "lang",
      "size"
    ])
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
    }
  }
};
</script>