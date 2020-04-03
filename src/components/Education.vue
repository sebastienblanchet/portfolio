<template>
  <div>
    <v-row v-for="item in education" :key="item.icon" tile>
      <v-img height="75" contain :src="require('@/assets/img/' + item.id + '.png')"></v-img>
    </v-row>
  </div>
</template>

<script>
import { education } from "@/assets/resume.json";

export default {
  name: "Education",
  data: () => ({
    education: education
  })
};
</script>