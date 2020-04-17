<template>
  <v-app id="inspire">
    <Navbar :sections="sections" />

    <v-content>
      <v-container fluid>
        <div v-for="section in sections" :key="section">
          <Section :str="section" />
        </div>
      </v-container>
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
  data: () => ({
    // define it one here, order matters
    sections: ["about", "interests", "timeline", "skills", "projects", "info"]
  }),
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>