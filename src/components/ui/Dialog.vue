<template>
  <div>
    <v-dialog v-model="dialog" scrollable max-width="500">
      <template v-slot:activator="{ on }">
        <v-btn text icon v-on="on">
          <IconItem text="see details" icon="mdi-dots-horizontal" />
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
import IconItem from "@/components/ui/IconItem";

export default {
  props: {
    project: Object
  },
  components: {
    IconItem
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>