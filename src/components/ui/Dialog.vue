<template>
  <div>
    <v-dialog v-model="dialog" scrollable max-width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="secondary" dark text icon v-on="on">
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">{{project.related}}</v-card-title>
        <v-card-text v-for="desc in project.description" :key="desc">{{desc}}</v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
export default {
  props: {
    project: Object
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>