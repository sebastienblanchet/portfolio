<template>
  <v-row dense>
    <v-col v-for="interest in interests" :key="interest" cols="12" sm="6" md="4" lg="3">
      <v-row dense>
        <v-col cols="auto mx-5">
          <v-icon v-text="getIcon(interest)"></v-icon>
        </v-col>
        <v-col cols="auto">{{translate(interest)}}</v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { interests } from "@/assets/resume.json";
import { interestsIcons } from "@/assets/dictionaries.json";

export default {
  data: () => ({
    interestsIcons: interestsIcons
  }),
  computed: {
    interests() {
      return interests;
    }
  },
  methods: {
    getIcon(interest) {
      const en = this.translate(interest, "en");
      return interestsIcons[en];
    }
  }
};
</script>