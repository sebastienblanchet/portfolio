export default {
  editLang({
    commit
  }, lang) {
    commit('editLang', lang);
  },

  editTheme({
    commit
  }, theme) {
    commit('editTheme', theme);
  },

  editSize({
    commit
  }, size) {
    commit('editSize', size);
  },

  editSect({
    commit
  }, sect) {
    commit('editSect', sect);
  }
}