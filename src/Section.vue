<template>
  <!-- for lets make this single page -->
  <v-container fluid>
    <component v-bind:is="component" />
  </v-container>
</template>

<script>
import About from "@/components/About";
import Timeline from "@/components/Timeline";

export default {
  components: {
    About,
    Timeline
  },
  props: {
    str: String
  },
  computed: {
    component: function() {
      switch (this.str) {
        case "About":
          return About;
        case "Timeline":
          return Timeline;
        default:
          return null;
      }
    }
  }
};
</script>