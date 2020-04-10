<template>
  <v-container fluid>
    <v-card elevation="0" class="d-md-flex justify-center">
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item v-for="job in jobs" :key="job.title" large>
        <template v-slot:icon>
          <v-avatar color="white">
            <v-img contain :src="require('@/assets/img/' + job.id + '.png')"></v-img>
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>
            <IconItem size="20" icon="mdi-calendar-month-outline" text="duration" />
            <span class="subtitle-2">{{job.start}} - {{job.end}}</span>
          </span>
        </template>
        <TimelineItem :job="job" />
      </v-timeline-item>
    </v-timeline>
    </v-card>
  </v-container>
</template>

<script>
import TimelineItem from "@/components/ui/TimelineItem";
import IconItem from "@/components/ui/IconItem";
// import Dialog from "@/components/ui/Dialog";
import { jobs } from "@/assets/resume.json";

export default {
  components: {
    IconItem,
    TimelineItem
    // Dialog
  },
  data: () => ({
    jobs: jobs
  }),
  methods: {
    getGoogleMaps(str) {
      // regex to replace spaces with + for map query
      str = str.replace(/\s/g, "+");
      return `https://www.google.ca/maps/place/${str}`;
    }
  }
};
</script>