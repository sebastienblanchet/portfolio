<template>
  <!-- <div v-for="project in projects" :key="project.title">{{project.title}}</div> -->
  <v-container fluid>
    <v-row dense>
      <v-col v-for="project in projects" :key="project.name" :cols="3">
        <v-card>
          <v-img
            :src="require('@/assets/img/' + project.img + '.png')"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title class="subtitle-1 font-weight-bold" v-text="project.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon v-show="isValid(project.download)">
              <v-icon>mdi-download</v-icon>
            </v-btn>

            <v-btn icon v-show="isValid(project.url)">
              <v-icon>mdi-link-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { projects } from "@/assets/resume.json";

export default {
  name: "Projects",
  data: () => ({
    projects: projects
  }),
  methods: {
    isValid(str) {
      return str.length > 0;
    },
    isValidDownload(download) {
      return this.isValid(download);
    }
  }
};
</script>