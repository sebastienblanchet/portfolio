<template>
  <div>
    <h1>About</h1>
    <v-card class="mx-auto" max-width="434" tile>
      <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
        <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-0" cols="12">
            <v-avatar class="profile" color="grey" size="164" tile>
              <v-img src="@/assets/img/me.jpg"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="title">Sebastien Blanchet</v-list-item-title>
                <v-list-item-subtitle>Software Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card>

    <v-btn
      :loading="loading"
      :disabled="loading"
      dark
      class="ma-2 white--text"
      href="https://github.com/sebastienblanchet/Resume/releases/download/v1.1.0/Resume.pdf"
    >
      Resume
      <v-icon right dark>mdi-download</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {},
  watch: {
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

