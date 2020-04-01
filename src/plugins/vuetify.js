import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // https://vuetifyjs.com/en/styles/colors/
        primary: colors.indigo.darken2,
        secondary: colors.grey.darken3,
        accent: colors.indigo.lighten3,
        error: colors.red.accent2,
        info: colors.amber,
        success: colors.green,
        warning: colors.amber,
      },
      dark: {
        // TODO
        primary: colors.indigo.darken2,
        secondary: colors.grey.darken3,
        accent: colors.indigo.lighten3,
        error: colors.red.accent2,
        info: colors.amber,
        success: colors.green,
        warning: colors.amber,
      },
    },
  },
});