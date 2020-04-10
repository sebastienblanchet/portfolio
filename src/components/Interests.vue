<template>
  <v-row dense>
    <v-col v-for="interest in interests" :key="interest" cols="12" md="4">
      <v-row dense>
        <v-col cols="auto mx-5">
          <v-icon v-text="interestsIcons[interest]"></v-icon>
        </v-col>
        <v-col cols="auto">{{interest}}</v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { interests } from "@/assets/resume.json";
import { interestsIcons } from "@/assets/dictionaries.json";

export default {
  data: () => ({
    interests: interests,
    interestsIcons: interestsIcons
  })
};
</script>