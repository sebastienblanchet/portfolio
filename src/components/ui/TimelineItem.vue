<template>
<v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2" class="d-flex row">
              <v-toolbar flat>
                <v-toolbar-title>{{job.title}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <Dialog :obj="job" />
                <IconItem @icon-click="toggleDesc" :text="iconText" :icon="iconName"/>
              </v-toolbar>
              <v-card-text v-show="!$vuetify.breakpoint.smAndDown && details">
              <v-list-item>
              <v-list-item-icon>
                  <IconItem
                    size="20"
                    icon="mdi-briefcase-outline"
                    :url="job.url"
                    text="see company web page"
                  />
                </v-list-item-icon>
                <v-list-item-subtitle>{{job.employer}}</v-list-item-subtitle>
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
                <v-list-item-subtitle class="">
                  {{job.technologies | arr2Csv}}
                </v-list-item-subtitle>
              </v-list-item>
              </v-card-text>
            </v-card>
</v-hover>
</template>

<script>
import IconItem from "@/components/ui/IconItem";
import Dialog from "@/components/ui/Dialog";

export default {
  name: "TimelineItem",
  props: {
    job: Object
  },
  components: {
    IconItem,
    Dialog
  },
  data: () => ({
    details: true
  }),
  computed: {
    iconName: function(){
      return (this.details ) ? "mdi-chevron-up" : "mdi-chevron-down";
    },
    iconText: function () {
      return ((this.details ) ? "hide" : "show") + " details";
    }
  },
  methods: {
    toggleDesc() {
      this.details = !this.details;
    },
    getGoogleMaps(str) {
      // regex to replace spaces with + for map query
      str = str.replace(/\s/g, "+");
      return `https://www.google.ca/maps/place/${str}`;
    }
  }
};
</script>