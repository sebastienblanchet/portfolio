<template>
  <v-tooltip v-model="show" top>
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        :href="url"
        target="_blank"
        :size="size"
        @click="$emit('icon-click')"
        text
        icon
        style="text-transform:none !important;"
      >
        <v-icon :size="size" v-text="icon" :color="color"></v-icon>
      </v-btn>
    </template>
    <span>{{text | title }}</span>
  </v-tooltip>
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
    },
    new: {
      default: true,
      type: Boolean
    }
  },
  data: () => ({
    show: false
  }),
  computed: {}
};
</script>
