<template>
  <div v-html="md" class="ma-5"></div>
</template>

<script>
import marked from "marked";
import readme from "../../README.md";

export default {
  name: "Info",
  data: () => ({
    md: null
  }),
  created() {
    var md = marked(readme);
    // md = this.replaceTag(md, "code", "kdb");
    md = this.replaceTag(md, "h2", "h3");
    md = this.replaceTag(md, "h1", "h2");
    this.md = md;
  },
  methods: {
    replaceStr(str, search, replacement) {
      let reg = new RegExp(search, "g");
      return str.replace(reg, replacement);
    },
    replaceTag(str, old, repl) {
      var out = this.replaceStr(str, `<${old}`, `<${repl}`);
      out = this.replaceStr(out, `</${old}>`, `</${repl}>`);
      return out;
    }
  }
};
</script>