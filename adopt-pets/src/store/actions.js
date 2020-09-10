export default {
  // actions
  addPet({ commit }, payload) {
    commit('appendPet', payload);
  },
};
