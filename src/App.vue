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
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default {
  components: {
    Navbar,
    Section,
    Footer,
  },
  data: () => ({
    offsetTop: 0,
    sections: ["about", "interests", "timeline", "skills", "projects"],
  }),
  created() {
    this.$vuetify.theme.dark = false;
  },
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
  },
};
</script>