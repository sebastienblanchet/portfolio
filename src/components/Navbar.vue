<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <SidebarItem icon="mdi-human-greeting" section="About" />
        <SidebarItem icon="mdi-timeline-text-outline" section="Timeline" />
        <SidebarItem icon="mdi-laptop-mac" section="Skills" />
        <SidebarItem icon="mdi-school-outline" section="Education" />
        <SidebarItem icon="mdi-briefcase-account-outline" section="Experience" />
        <SidebarItem icon="mdi-code-braces" section="Projects" />
        <!-- <SidebarItem icon="mdi-cursor-text" section="Blog" /> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Portfolio</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import SidebarItem from "@/components/ui/SidebarItem";

export default {
  components: {
    SidebarItem
  },
  data: () => ({
    drawer: null
  })
};
</script>