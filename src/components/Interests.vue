<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="interest in interests" :key="interest" :cols="4">
        <v-row dense>
          <v-col cols="1 mx-auto">
            <v-icon v-text="interestsIcons[interest]"></v-icon>
          </v-col>
          <v-col cols="mx-auto">{{interest}}</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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