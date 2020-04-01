<template>
  <div>
    <div v-for="project in projects" :key="project.title">{{project.title}}</div>
  </div>
</template>

<script>
import { projects } from "@/assets/resume.json";

export default {
  name: "Projects",
  data: () => ({
    projects: projects
  }),
  methods: {}
};
</script>