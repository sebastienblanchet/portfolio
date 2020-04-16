<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="project in projects" :key="project.name"
         cols="12"
         sm="4"
         md="3"
         lg="2" >
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2">
            <v-img
              :src="require('@/assets/img/' + project.img + '.png')"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              contain
            >
              <v-card-title class="subtitle-1 font-weight-bold" v-text="project.title"></v-card-title>
            </v-img>
            <v-card-actions>
              <div v-show="isValid(project.download)">
                <IconItem
                  icon="mdi-download"
                  :url="project.download"
                  :new="false"
                  text="download project artifacts"
                />
              </div>
              <div v-show="isValid(project.code)">
                <IconItem icon="mdi-code-tags" :url="project.code" text="see project code" />
              </div>
              <div v-show="isValid(project.url)">
                <IconItem icon="mdi-link-variant" :url="project.url" text="see project link" />
              </div>
              <v-spacer></v-spacer>
              <Dialog :obj="project" />
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Dialog from "@/components/ui/Dialog";
import IconItem from "@/components/ui/IconItem";
import projects from "@/assets/projects.json";

export default {
  name: "Projects",
  components: {
    Dialog,
    IconItem
  },
  data: () => ({
    projects: projects
  }),
  methods: {
    isValid(str) {
      return str ? str.length > 0 : false;
    },
    isValidDownload(download) {
      return this.isValid(download);
    }
  }
};
</script>