<template>
    <PatientForm class = "patienCreateForm" v-bind:isDisabled = "false" type="create" />
</template>
  
  <script>
  
  import PatientForm from '../../components/Patient/PatientForm.vue';

  export default {
   
    components: {
        PatientForm
    }
  }
  </script>

  <style scoped>
  .patienCreateForm {
    margin: auto;
  }
    </style>