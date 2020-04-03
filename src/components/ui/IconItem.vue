<template>
  <v-btn :href="url" target="_blank" text icon :size="size" style="text-transform:none !important;">
    <v-icon :size="size" v-text="icon" :color="color"></v-icon>
    {{text}}
  </v-btn>
</template>


<script>
export default {
  props: {
    // required
    icon: String,
    url: String,
    size: {
      default: "",
      type: String
    },
    color: {
      default: "",
      type: String
    },
    text: {
      default: "",
      type: String
    }
  }
};
</script>
