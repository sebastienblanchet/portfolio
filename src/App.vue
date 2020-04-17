<template>
  <v-app id="inspire">
    <Navbar :sections="sections" />

    <v-content>
      <v-container fluid>
        <!-- id="scroll-target"
          v-scroll:#scroll-target="onScroll" -->
        <div
          v-for="section in sections"
          :key="section">
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
    sections: ["about", "interests", "timeline", "skills", "projects", "info"],
    offsetTop: 0,
  }),
  created() {
    this.$vuetify.theme.dark = false;
  },
  methods: {
    onScroll (e) {
      this.offsetTop = e.target.scrollTop;
    }
  }
};
</script>