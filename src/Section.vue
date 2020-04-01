<template>
  <!-- wrapper class to apply same container themes-->
  <v-container class="mx-5 my-5" fluid>
    <v-row>
      <v-cols>
        <!-- <a :href="`#${str}`"> -->
        <h1>
          <a :href="`#${str}`">{{str}}</a>
        </h1>
        <component v-bind:is="component" />
      </v-cols>
    </v-row>
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