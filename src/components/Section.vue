<template>
  <!-- wrapper class to apply same container themes-->
  <v-container fluid :id="str">
    <v-expansion-panels v-model="panel" multiple :ref="str">
      <v-expansion-panel>
        <v-expansion-panel-header class="headline font-weight-bold">
          <div>
            <v-icon class="ma-2" v-text="sectionDict[str]" style="vertical-align: middle;"></v-icon>
            <span style="vertical-align: middle;">{{title | title}}</span>
          </div>
          <v-spacer />
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
import { sectionDict } from "@/assets/dictionaries.json";

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
  props: {
    str: String
  },
  data: () => ({
    panel: [0, 1],
    sectionDict: sectionDict,
    dict: {
      about: About,
      interests: Interests,
      timeline: Timeline,
      skills: Skills,
      education: Education,
      projects: Projects,
      info: Info
    }
  }),
  computed: {
    component: function() {
      return this.dict[this.str];
    },
    title() {
      return this.translate(this.str);
    }
  },
  methods: {},
  watch: {}
};
</script>