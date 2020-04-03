<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <div v-for="section in sections" :key="section">
          <SidebarItem :icon="getIcon(section)" :section="section" />
        </div>
      </v-list>
    </v-navigation-drawer>

    <!-- TO ADD IMG -->
    <v-app-bar app clipped-left dark color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title id="top">
        <v-btn
          text
          @click="goHome()"
          class="headline"
          style="text-transform:none !important;"
        >Portfolio</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>-->
    </v-app-bar>
  </div>
</template>

<script>
import SidebarItem from "@/components/ui/SidebarItem";
import { sectionDict } from "@/assets/dictionaries.json";

export default {
  props: {
    sections: Array
  },
  components: {
    SidebarItem
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    getIcon(sect) {
      const i = sectionDict[sect];
      return i;
    },
    goHome() {
      this.$vuetify.goTo("#top");
    }
  }
};
</script>