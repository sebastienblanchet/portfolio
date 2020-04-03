<template>
  <v-btn
    text
    class="mx-0 font-weight-bold"
    @click="goTo()"
    style="text-transform:none !important;"
  >{{section}}</v-btn>
</template>


<script>
export default {
  name: "Goto",
  props: {
    // required
    section: String
  },
  computed: {},
  methods: {
    goTo() {
      const s = `#${this.section}`;
      this.$vuetify.goTo(s);
    }
  }
};
</script>
