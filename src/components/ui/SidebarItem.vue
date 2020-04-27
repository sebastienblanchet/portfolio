<template>
  <!-- link v-bind:href="url"  -->
  <v-list-item @click="goTo()">
    <v-list-item-action>
      <v-icon bold v-text="icon"></v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{translated | title}}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    icon: String,
    section: String
  },
  computed: {
    // dynamic url for section heading
    url() {
      return `#${this.section}`;
    },
    translated() {
      return this.translate(this.section);
    }
  },
  methods: {
    goTo() {
      this.$vuetify.goTo(this.url);
    }
  }
};
</script>