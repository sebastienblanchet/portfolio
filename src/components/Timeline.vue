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
          <!-- <v-list-item>
            <v-list-item-icon>
              <IconItem size="20" icon="mdi-calendar-month-outline" text="division" />
            </v-list-item-icon>
            <v-list-item-subtitle>{{job.start}} - {{job.end}}</v-list-item-subtitle>
          </v-list-item>-->
        </template>
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2" class="d-flex row" max-width="700">
              <v-card-title class="title">{{job.title}}
                <v-spacer></v-spacer>
                <Dialog :obj="job" />
              </v-card-title>
              <v-list-item>
              <v-list-item-icon>
                  <IconItem
                    size="20"
                    icon="mdi-briefcase-outline"
                    :url="job.url"
                    text="see company web page"
                  />
                </v-list-item-icon>
                <v-list-item-subtitle v-show="!$vuetify.breakpoint.smAndDown">{{job.employer}}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <IconItem size="20" icon="mdi-account-group" text="division" />
                </v-list-item-icon>
                <v-list-item-subtitle>{{job.division}}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <IconItem
                    size="20"
                    icon="mdi-map-marker"
                    :url="getGoogleMaps(job.location)"
                    text="open location in goole maps"
                  />
                </v-list-item-icon>
                <v-list-item-subtitle>{{job.location}}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item v-if="job.technologies.length">
                <v-list-item-icon>
                  <IconItem size="20" icon="mdi-code-tags" text="technologies used" />
                </v-list-item-icon>
                <v-list-item-subtitle>{{job.technologies | arr2Csv}}</v-list-item-subtitle>
              </v-list-item>
            </v-card>
          </v-hover>
      </v-timeline-item>
    </v-timeline>
    </v-card>
  </v-container>
</template>

<script>
import IconItem from "@/components/ui/IconItem";
import Dialog from "@/components/ui/Dialog";
import { jobs } from "@/assets/resume.json";

export default {
  components: {
    IconItem,
    Dialog
  },
  data: () => ({
    jobs: jobs
  }),
  methods: {
    getGoogleMaps(str) {
      // regex to replace spaces with + for map call
      str = str.replace(/\s/g, "+");
      return `https://www.google.ca/maps/place/${str}`;
    }
  }
};
</script>