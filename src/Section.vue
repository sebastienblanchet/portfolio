<template>
  <!-- wrapper class to apply same container themes-->
  <v-container class="mx-5 my-5">
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header class="headline" :ref="str">
          <b>{{str}}</b>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <component v-bind:is="component" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";

export default {
  components: {
    About,
    Timeline
  },
  data: () => ({
    panel: [0, 1]
  }),
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
        case "Projects":
          return Projects;
        default:
          return null;
      }
    }
  },
  methods: {}
};
</script>