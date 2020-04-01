<template>
  <v-app id="inspire">
    <Navbar />

    <v-content>
      <!-- for now lets make this single page -->
      <Section str="About" />
      <Section str="Interests" />
      <Section str="Timeline" />
      <Section str="Projects" />
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