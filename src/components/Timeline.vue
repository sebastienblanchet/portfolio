<template>
  <div>
    <h1>Experience</h1>
    <v-timeline>
      <v-timeline-item v-for="job in resume.work" :key="job.title" large>
        <template v-slot:icon>
          <v-avatar>
            <img v-bind:src="getImg(job.id)" />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>{{job.start}} - {{job.end}}</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{job.title}}</v-card-title>
          <!-- <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text> -->
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
      const bld = `require('@/assets/img/${str}.png')`;
      console.log(bld);
      return bld;
    }
  }
};
</script>