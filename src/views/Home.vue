<template>
  <v-container fluid>
    <div v-for="section in sections" :key="section">
      <Section :str="section" />
    </div>
  </v-container>
</template>

<script>
import Section from "@/components/Section";

export default {
  components: {
    Section
  },
  data: () => ({
    // define it one here, order matters
    sections: ["about", "interests", "timeline", "skills", "projects"]
  }),
  created() {},
  methods: {}
};
</script>