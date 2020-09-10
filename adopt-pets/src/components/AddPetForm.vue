<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="dataForm.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Age:" label-for="input-2">
        <b-form-input
          type="number"
          id="input-2"
          v-model="dataForm.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="dataForm.species"
          :options="['', 'cat', 'dog']"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddPetForm',
  data() {
    return {
      dataForm: {
        name: '',
        age: 0,
        species: null,
      },
    };
  },
  methods: {
    ...mapActions([
      'addPet',
    ]),
    onSubmit() {
      this.addPet(this.dataForm);
      this.dataForm = {
        name: '',
        age: 0,
        species: null,
      };
    },
  },
};
</script>

<style scoped>

</style>
