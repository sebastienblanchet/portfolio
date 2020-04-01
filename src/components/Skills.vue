<template>
  <div>
    <!-- Contentify this -->
    <div v-for="itm in skills.programming" :key="itm">
      <v-img height="100" width="100" :src="getImg(itm)"></v-img>
    </div>
    <div v-for="itm in skills.frameworks" :key="itm">
      <v-img height="100" width="100" :src="getImg(itm)"></v-img>
    </div>
    <div v-for="itm in skills.other" :key="itm">
      <v-img height="100" width="100" :src="getImg(itm)"></v-img>
    </div>
  </div>
</template>

<script>
import { skills } from "@/assets/resume.json";
import { logoDict } from "@/assets/dictionaries.json";

export default {
  name: "Skills",
  data: () => ({
    skills: skills
  }),
  methods: {
    getImg(lookUp) {
      return logoDict[lookUp];
    }
  }
};
</script>