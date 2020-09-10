<template>
  <div class="home">
    <h1>Adopt a new best friend.</h1>
    <button class="btn btn-info" @click.prevent="toggleFormBtn">Add Pet</button>
    <AddPetForm v-if="toggleForm"/>
  </div>
</template>

<script>

import AddPetForm from '../components/AddPetForm';

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
  methods: {
    toggleFormBtn() {
      this.toggleForm = !this.toggleForm;
    },
  },
};
</script>
