<template>
  <div>
    <v-timeline>
      <v-timeline-item v-for="job in jobs" :key="job.title" large>
        <template v-slot:icon>
          <v-avatar color="white">
            <v-img contain :src="require('@/assets/img/' + job.id + '.png')"></v-img>
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>
            <v-icon>mdi-calendar-month-outline</v-icon>
            {{job.start}} - {{job.end}}
          </span>
          <!-- TODO fix this -->
          <!-- <IconItem icon="mdi-map-marker" :url="getGoogleMaps(job.location)" :text="job.location" /> -->
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{job.title}}</v-card-title>
          <v-card-text>
            {{job.employer}}
            <IconItem size="20" icon="mdi-link-variant" :url="job.url" />
          </v-card-text>
          <v-card-text>{{job.division}}</v-card-text>
          <v-card-text>{{job.technologies | arr2Csv}}</v-card-text>
          <!-- TODO click for more -->
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import IconItem from "@/components/ui/IconItem";
import { jobs } from "@/assets/resume.json";

export default {
  components: {
    IconItem
  },
  data: () => ({
    jobs: jobs
  }),
  methods: {
    getImg(str) {
      const path = `'@/assets/img/${str}.png'`;
      return path;
    },

    getGoogleMaps(str) {
      // regex to replace spaces with + for map call
      str = str.replace(/\s/g, "+");
      return `https://www.google.ca/maps/place/${str}`;
    }
  }
};
</script>