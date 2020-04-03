<template>
  <div>
    <v-card class="mx-2 my-2" v-for="item in education" :key="item.icon" tile>
      <v-card-title>{{item.name}}</v-card-title>
      <v-list-item three-line>
        <v-list-item-avatar tile>
          <v-img width="150" contain :src="require('@/assets/img/' + item.id + '.png')"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import { education } from "@/assets/resume.json";

export default {
  name: "Education",
  data: () => ({
    education: education
  })
};
</script>