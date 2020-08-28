<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table striped hover :items="cats">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pet/${data.value}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import cats from '@/data/cats';

export default {
  name: 'cats',
  data() {
    return {
      cats,
    };
  },
};
</script>

<style scoped>

</style>
