<template>
  <div>
    <v-timeline>
      <v-timeline-item v-for="job in jobs" :key="job.title" large>
        <template v-slot:icon>
          <v-avatar color="white">
            <v-img :src="require('@/assets/img/' + job.id + '.png')"></v-img>
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>
            <v-icon>mdi-calendar</v-icon>
            <i>{{job.start}} - {{job.end}}</i>
            <br />
            <v-icon>mdi-map-marker</v-icon>
            {{job.location }}
          </span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">
            {{job.title}}
            <br />
            {{job.employer}}
          </v-card-title>
          <v-card-text>{{job.division}}</v-card-text>
          <v-card-text>{{job.technologies | arr2Csv}}</v-card-text>
          <!-- TODO click for more -->
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { jobs } from "@/assets/resume.json";

export default {
  data: () => ({
    jobs: jobs
  }),
  methods: {
    getImg(str) {
      const path = `'@/assets/img/${str}.png'`;
      return path;
    }
  }
};
</script>