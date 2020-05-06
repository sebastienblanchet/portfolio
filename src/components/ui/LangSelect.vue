<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on" style="text-transform:none !important;">
          <v-icon left>mdi-translate</v-icon>
          <div v-if="!$store.isMobile">
            {{langs[$store.state.lang] | title}}
            <v-icon small right>mdi-chevron-down</v-icon>
          </div>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(key, value) in langs" :key="key" @click="selected = value">
          <v-list-item-title>{{ key | title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { langs } from "@/assets/translation.json";

export default {
  data: () => ({
    langs: langs,
    selected: ""
  }),
  beforeMount() {
    this.editLang(this.getNavigatorLanguage());
  },
  methods: {
    ...mapActions(["editTheme", "editLang", "editSize"]),
    getNavigatorLanguage() {
      const src =
        navigator.languages && navigator.languages.length
          ? navigator.languages[0]
          : navigator.userLanguage ||
            navigator.language ||
            navigator.browserLanguage ||
            "en";
      const lang = src.substring(0, 2);
      return lang;
    }
  },
  watch: {
    selected(value) {
      this.editLang(value);
    }
  }
};
</script>