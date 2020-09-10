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

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="dataForm.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
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
    onSubmit() {
      console.log(this.dataForm, 'this.dataForm');
    },
  },
};
</script>

<style scoped>

</style>
