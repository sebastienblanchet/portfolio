<template>
  <!-- wrapper class to apply same container themes-->
  <v-container fluid :id="str">
    <v-expansion-panels v-model="panel" multiple :ref="str">
      <v-expansion-panel>
        <v-expansion-panel-header class="headline">
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
import Interests from "@/components/Interests";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Info from "@/components/Info";

export default {
  components: {
    About,
    Interests,
    Timeline,
    Skills,
    Education,
    Projects,
    Info
  },
  data: () => ({
    panel: [0, 1],
    dict: {
      About: About,
      Interests: Interests,
      Timeline: Timeline,
      Skills: Skills,
      Education: Education,
      Projects: Projects,
      Info: Info
    }
  }),
  props: {
    str: String
  },
  computed: {
    component: function() {
      return this.dict[this.str];
    }
  },
  methods: {}
};
</script>