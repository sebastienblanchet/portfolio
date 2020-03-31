<template>
  <v-list-item link v-bind:href="url">
    <v-list-item-action>
      <v-icon v-text="icon"></v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{section}}</v-list-item-title>
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
    url: function() {
      return `#${this.section}`;
    }
  }
};
</script>