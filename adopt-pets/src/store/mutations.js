export default {
  // mutations
  appendPet(state, payload) {
    const { species, ...pet } = payload;
    state[`${species}s`].push({ ...pet, species });
  },
};
