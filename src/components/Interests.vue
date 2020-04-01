<template>
  <div>
    <v-list-item v-for="interest in interests" :key="interest.icon" tile>
      <v-list-item-action>
        <v-icon v-text="interest.icon"></v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{interest.activity}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import { interests } from "@/assets/resume.json";

export default {
  data: () => ({
    interests: interests
  })
};
</script>