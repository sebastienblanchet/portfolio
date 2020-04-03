<template>
  <v-btn
    :href="url"
    :target="target"
    :size="size"
    text
    icon
    style="text-transform:none !important;"
  >
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
    },
    // new tab
    new: {
      default: true,
      type: Boolean
    }
  },
  computed: {
    target: function() {
      if (!this.new) {
        console.log(this.url);
        console.log(this.new);
      }
      return this.new ? "_blank" : "";
    }
  }
};
</script>
