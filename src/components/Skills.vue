<template>
  <div>
    <!-- Con  tentify this -->
    <v-card class="my-2">
      <v-card-title>Languages</v-card-title>
      <v-card-text>
        <!-- TODO -->
        <!-- <Rating color="red" :rating="4.5" size="20" /> -->
        <!-- <Rating color="red" :rating="3" size="20" /> -->
        <v-row align="start">
          <v-col cols="4" md="1" v-for="itm in skills.programming" :key="itm">
            <SkillsItem :name="itm" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="my-2">
      <v-card-title>Frameworks</v-card-title>
      <v-card-text>
        <v-row align="start">
          <v-col cols="4" md="1" v-for="itm in skills.frameworks" :key="itm">
            <SkillsItem :name="itm" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="my-2">
      <v-card-title>Libraries</v-card-title>
      <v-card-text>
        <v-row align="start">
          <v-col cols="4" md="1" v-for="itm in skills.libraries" :key="itm">
            <SkillsItem :name="itm" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="my-2">
      <v-card-title>Operating Systems</v-card-title>
      <v-card-text>
        <v-row align="start">
          <v-col cols="4" md="1" v-for="itm in skills.os" :key="itm">
            <SkillsItem :name="itm" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="my-2">
      <v-card-title>Hardware</v-card-title>
      <v-card-text>
        <v-row align="start">
          <v-col cols="4" md="1" v-for="itm in skills.hardware" :key="itm">
            <SkillsItem :name="itm" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="my-2">
      <v-card-title>Other</v-card-title>
      <v-card-text>
        <v-row align="start">
          <v-col cols="4" md="1" v-for="itm in skills.other" :key="itm">
            <SkillsItem :name="itm" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import SkillsItem from "@/components/ui/SkillsItem";
// import Rating from "@/components/ui/Rating";
import { skills } from "@/assets/resume.json";
import { logoDict } from "@/assets/dictionaries.json";

export default {
  name: "Skills",
  components: {
    SkillsItem
    // Rating
  },
  data: () => ({
    skills: skills
  }),
  methods: {
    getImg(lookUp) {
      return logoDict[lookUp];
    }
  }
};
</script>