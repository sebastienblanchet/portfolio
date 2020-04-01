<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="primary">
            <span class="headline white--text">{{about.name}}</span>
          </v-card-title>
          <v-avatar class="profile mx-5 my-5" color="white" size="175" tile>
            <v-img src="@/assets/img/me.png"></v-img>
          </v-avatar>
          <v-card-text>
            <IconItem size="50" icon="mdi-github" :url="about.git" />
            <IconItem size="50" icon="mdi-linkedin" :url="about.li" />
            <IconItem size="50" icon="mdi-stack-overflow" :url="about.stack" />
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
      <v-col cols="8">
        <v-card class="mx-auto">
          <!-- <v-card-title>Message</v-card-title -->
          <v-card-text>
            <p class="display-1 text--primary">Welcome to my portofolio!</p>
            <!-- <p>adjective</p> -->
            <div class="text--primary">
              I coded this entirely from scratch with the help of my new favorite JavaScript framework/library
              <v-icon size="24px">mdi-vuejs</v-icon>
              <b>Vue.js</b>
            </div>
          </v-card-text>
          <!-- TODO sell yourself some more -->
          <v-card-text>
            <div class="text--primary">
              Born and raised from a small billingual community of New Liskeard in Northern Ontario, I grew up fixing (mostly breaking) my family's four-wheelers and snowmachine.
              This part of my background played a large part in my motivation to study as a Mechanical Engineer at the University of Waterloo.
              Throughout the course of my undergrad, I was slowly introduced to the world of software development and immediately developped a passion and this is apparent in my journey as seen in the
              <b>Timeline</b> below.
            </div>
          </v-card-text>
          <v-card-text>
            <div
              class="text--primary"
            >If you would like something a little more formal, feel free to download the latest GitHub release of my resume!</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="success"
              class="ma-2 white--text"
              href="https://github.com/sebastienblanchet/Resume/releases/download/v1.1.0/Resume.pdf"
            >
              Resume
              <v-icon right>mdi-download</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import IconItem from "@/components/ui/IconItem";
import { about } from "@/assets/resume.json";

export default {
  components: {
    IconItem
  },
  data() {
    return {
      loading: false,
      about: about
    };
  },
  methods: {},
  watch: {
    // loading wheel
    loader() {
      this.loading = !this.loading;
      setTimeout(() => (this.loading = false), 3000);
    }
  }
};
</script>

<style>
/* maybe get rid of later */
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

