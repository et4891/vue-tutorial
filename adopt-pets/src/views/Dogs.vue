<template>
  <div>
    <PetTable
      :pets="dogs"
      :species="$options.name"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PetTable from '../components/PetTable';

export default {
  name: 'dogs',
  components: {
    PetTable,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState([
      'dogs',
    ]),
  },
};
</script>

<style scoped>

</style>
