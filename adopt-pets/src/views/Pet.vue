<template>
  <div>
    <p>{{ animal.name }}</p>
    <p>{{ animal.age }} years old</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Pet',
  data() {
    return {
      animal: {},
    };
  },
  computed: {
    ...mapState([
      'dogs',
      'cats',
    ]),
  },
  mounted() {
    const { species, id } = this.$route.params;
    this.animal = this[species][id];
  },
};
</script>

<style scoped>

</style>
