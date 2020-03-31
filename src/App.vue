<template>
  <v-app id="inspire">
    <Navbar />

    <v-content>
      <!-- for lets make this single page -->
      <Section str="About" />
      <Section str="Timeline" />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Section from "@/Section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  components: {
    Navbar,
    Section,
    Footer
  },
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>