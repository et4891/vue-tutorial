<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend.</h1>
    <h2>Total adopted {{ totalPets }}</h2>
    <button class="btn btn-info" @click.prevent="toggleFormBtn">Add Pet</button>
    <AddPetForm v-if="toggleForm"/>
  </div>
</template>

<script>

import AddPetForm from '../components/AddPetForm';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      toggleForm: false,
    };
  },
  components: {
    AddPetForm,
  },
  computed: {
    ...mapGetters([
      'totalPets',
    ]),
  },
  methods: {
    toggleFormBtn() {
      this.toggleForm = !this.toggleForm;
    },
  },
};
</script>
