<template>
  <div>
    <!-- Contentify this -->
    <v-avatar class="my-1" size="75" tile>
      <v-img contain :src="getImg()"></v-img>
    </v-avatar>
  </div>
</template>

<script>
import { logoDict } from "@/assets/dictionaries.json";

export default {
  name: "Skills",
  props: {
    name: String
  },
  data: () => ({}),
  methods: {
    getImg() {
      return logoDict[this.name];
    }
  }
};
</script>