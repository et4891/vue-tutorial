<template>
  <div>
    <PetTable
      :pets="cats"
      :species="$options.name"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PetTable from '../components/PetTable';

export default {
  name: 'cats',
  components: {
    PetTable,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState([
      'cats',
    ]),
  },
};
</script>

<style scoped>

</style>
