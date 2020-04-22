<template>
  <div>
    <v-row>
      <v-col cols="auto">
        <v-card>
          <v-card-title class="primary">
            <span class="headline white--text">{{about.name}}</span>
          </v-card-title>
          <v-card-text class="text-center">
            <v-avatar class="profile mx-5 my-5" color="white" size="175">
              <v-img src="@/assets/img/me.png"></v-img>
            </v-avatar>
          </v-card-text>
          <v-card-text class="text-center">
            <v-row>
              <v-col cols="mx-auto">
                <IconItem
                  size="50"
                  icon="mdi-github"
                  :url="about.git"
                  color="grey darken-4"
                  text="see GitHub profile"
                />
              </v-col>
              <v-col cols="mx-auto">
                <IconItem
                  size="50"
                  icon="mdi-linkedin"
                  :url="about.li"
                  color="indigo"
                  text="see LinkedIn profile"
                />
              </v-col>
              <v-col cols="mx-auto">
                <IconItem
                  size="50"
                  icon="mdi-stack-overflow"
                  :url="about.stack"
                  color="orange"
                  text="see stack overflow profile"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-email</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{about.email}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-map-marker</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{about.location}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="mx-auto">
        <v-card class="mx-auto">
          <v-card-text>
            <p class="display-1 text--primary">{{bio.title}}</p>
            <div class="text--primary" v-for="(item, index) in bio.description" :key="index">
              {{item}}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="success"
              class="ma-2 white--text"
              href="https://github.com/sebastienblanchet/Resume/releases/latest/download/Resume.pdf"
            >
              <v-icon>mdi-download</v-icon>
              Résumé
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
    </v-row>
  </div>
</template>

<script>
import IconItem from "@/components/ui/IconItem";
// import Goto from "@/components/ui/Goto";
import { about, bio } from "@/assets/resume.json";

export default {
  components: {
    IconItem
  },
  data: () => ({
  }),
  computed: {
    about() {
      return about[this.$store.state.lang];
    },
    bio() {
      return bio[this.$store.state.lang];
    }
  },
  methods: {},
  watch: {}
};
</script>

