<template>
    <v-card class="my-2">
      <v-card-title>{{title | title}}</v-card-title>
      <v-card-text>
        <!-- TODO -->
        <!-- <Rating color="red" :rating="4.5" size="20" /> -->
        <!-- <Rating color="red" :rating="3" size="20" /> -->
        <v-row align="start">
          <v-col cols="4" md="1" v-for="itm in items" :key="itm">
            <SkillsItem :name="itm" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
</template>

<script>
// import Rating from "@/components/ui/Rating";
import SkillsItem from "@/components/ui/SkillsItem";
import { skills } from "@/assets/resume.json";

export default {
  name: "Skills",
  components: {
    // Rating,
    SkillsItem
  },
  props: {
    name: String,
    items: Array
  },
  data: () => ({
    sects: ["languages", "frameworks", "libraries", "os", "hardware", "other"]
  }),
  computed: {
    skills() {
      return skills;
    },
    title() {
      return this.translate(this.name);
    }
  },
  methods: {}
};
</script>