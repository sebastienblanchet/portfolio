<template>
  <div v-html="md"></div>
</template>

<script>
import marked from "marked";
import readme from "../../README.md";

export default {
  name: "Info",
  data: () => ({
    md: marked(readme)
  }),
  computed: {}
};
</script>