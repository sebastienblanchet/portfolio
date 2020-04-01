<template>
  <v-btn :href="url" text>
    <v-icon :size="size" v-text="icon"></v-icon>
  </v-btn>
</template>


<script>
export default {
  props: {
    icon: String,
    url: String,
    size: String
  }
};
</script>