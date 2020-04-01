<template>
  <div>
    <v-timeline>
      <v-timeline-item v-for="job in resume.work" :key="job.title" large>
        <template v-slot:icon>
          <v-avatar>
            <img v-bind:src="getImg(job.id)" />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>
            <i>{{job.start}} - {{job.end}}</i>
          </span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{job.title}}</v-card-title>
          <v-card-text>{{job.division}}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import res from "@/assets/resume.json";

export default {
  data: () => ({
    resume: res
  }),
  methods: {
    getImg(str) {
      const path = `@/assets/img/${str}.png`;
      require(path);
      return path;
    }
  }
};
</script>