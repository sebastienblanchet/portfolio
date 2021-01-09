<template>
  <v-app id="inspire">
    <Navbar :sections="sections" />

    <v-content>
      <v-container fluid>
        <!-- id="scroll-target"
        v-scroll:#scroll-target="onScroll"-->
        <router-view />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    offsetTop: 0,
    // TODO
    sections: ["about", "interests", "timeline", "skills", "projects"]
  }),
  created() {
    this.$vuetify.theme.dark = false;
  },
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    }
  }
};
</script>