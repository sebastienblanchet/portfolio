<template>
  <div>
    <!-- <v-card max-width="500" tile>
      <v-img height="100%" src="@/assets/img/loc.png">
        <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-0" cols="12">
            <v-avatar class="profile" color="white" size="164" tile>
              <v-img src="@/assets/img/me.png"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="title">{{about.name}}</v-list-item-title>
                <v-list-item-subtitle>{{about.summary}}</v-list-item-subtitle>
                <v-list-item-subtitle>{{about.location}}</v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-btn class="dark icon" :href="about.git" text small>
                    <v-icon size="24px">mdi-github</v-icon>
                  </v-btn>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-btn class="dark icon" :href="about.li" text small>
                    <v-icon size="24px">mdi-linkedin</v-icon>
                  </v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card>-->
    <v-row justify="center">
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
      <v-spacer></v-spacer>
      <v-col cols="8">
        <v-card>
          <v-card-title>Message</v-card-title>
          <v-btn
            :loading="loading"
            :disabled="loading"
            color="primary"
            class="ma-2 white--text"
            href="https://github.com/sebastienblanchet/Resume/releases/download/v1.1.0/Resume.pdf"
          >
            Resume
            <v-icon right>mdi-download</v-icon>
          </v-btn>
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

