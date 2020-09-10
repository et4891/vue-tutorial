<template>
  <div>
    <h1>{{ species | capitalize }} for Adoption</h1>
    <b-table striped hover :items="pets">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/${species}/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'PetTable',
  props: [ 'pets', 'species' ],
  filters: {
    capitalize: value => {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0)
        .toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style scoped>

</style>
