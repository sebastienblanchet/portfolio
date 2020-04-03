<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="interest in interests" :key="interest.icon" :cols="4">
        <v-row dense>
          <v-col cols="1">
            <v-icon v-text="interest.icon"></v-icon>
          </v-col>
          <v-col>{{interest.activity}}</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { interests } from "@/assets/resume.json";

export default {
  data: () => ({
    interests: interests
  })
};
</script>