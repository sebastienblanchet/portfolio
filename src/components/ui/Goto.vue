<template>
  <v-btn text class="mx-0 font-weight-bold" @click="goTo()" style="text-transform:none !important;">
    <div class="secondary--text">
      <v-icon class="ma-1" v-text="sectionDict[section]"></v-icon>
      {{section}}
    </div>
  </v-btn>
</template>


<script>
import { sectionDict } from "@/assets/dictionaries.json";

export default {
  name: "Goto",
  props: {
    // required
    section: String
  },
  data: () => ({
    sectionDict: sectionDict
  }),
  computed: {},
  methods: {
    goTo() {
      const s = `#${this.section}`;
      this.$vuetify.goTo(s);
    }
  }
};
</script>
