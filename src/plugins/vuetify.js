import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#4848a8 ",
        secondary: "#A4A4E1",
        accent: "#5F60DB",
        error: "#43435C",
      },
    },
  },
});
