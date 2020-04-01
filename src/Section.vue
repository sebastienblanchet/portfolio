<template>
  <!-- wrapper class to apply same container themes-->
  <v-container fluid>
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
import Interests from "@/components/Interests";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Info from "@/components/Info";

export default {
  components: {
    About,
    Interests,
    Timeline,
    Skills,
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
  methods: {
    // scroll to anchor.....
    // https://stackoverflow.com/questions/42645964/vue-js-anchor-to-div-within-the-same-component
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
  }
};
</script>