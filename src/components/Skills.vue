<template>
  <div>
    <div v-for="sect in sections" :key="sect">
      <SkillsCard :name="sect" :items="skills[sect]"/>
    </div>
  </div>
</template>

<script>
import SkillsCard from "@/components/ui/SkillsCard";
import { skills } from "@/assets/resume.json";

export default {
  name: "Skills",
  components: {
    SkillsCard
  },
  data: () => ({
    sections: ["languages", "frameworks", "libraries", "os", "hardware", "devops", "other"]
  }),
  computed: {
    skills() {
      return skills;
    }
  },
  methods: {}
};
</script>