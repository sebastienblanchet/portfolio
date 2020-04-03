<template>
  <v-app id="inspire">
    <Navbar />

    <v-content>
      <Section str="About" />
      <Section str="Interests" />
      <Section str="Timeline" />
      <Section str="Skills" />
      <Section str="Education" />
      <Section str="Projects" />
      <Section str="Info" />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Section from "@/components/Section";
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