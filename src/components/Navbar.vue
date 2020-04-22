<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped mini-variant expand-on-hover>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="@/assets/img/me.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>{{about.name}}</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <div v-for="section in sections" :key="section">
          <SidebarItem :icon="sectionDict[section]" :section="section" />
        </div>
      </v-list>
    </v-navigation-drawer>
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
      <ThemeInvert />
      <LangSelect />
    </v-app-bar>
  </div>
</template>

<script>
import SidebarItem from "@/components/ui/SidebarItem";
import ThemeInvert from "@/components/ui/ThemeInvert";
import LangSelect from "@/components/ui/LangSelect";
import { about } from "@/assets/resume.json";
import { sectionDict } from "@/assets/dictionaries.json";

export default {
  props: {
    sections: Array
  },
  components: {
    SidebarItem,
    ThemeInvert,
    LangSelect
  },
  data: () => ({
    drawer: null,
    sectionDict: sectionDict
  }),
  computed: {
    about() {
      return about[this.$store.state.lang];
    }
  },
  methods: {
    goHome() {
      this.$vuetify.goTo("#top");
    }
  },

};
</script>