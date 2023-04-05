<template>
    <PatientForm class="patienEditForm" v-bind:isDisabled = "false" :patient=patient type="update" />
</template>
  
  <script>
  import PatientForm from '../../components/Patient/PatientForm.vue';

  export default {
    
    computed: {
      patient() {// данные для формы редактирования пациента
            return this.$store.state.patient.patients.find(p => p.id == this.$route.params.id)
        }
    },
    components: {
        PatientForm
    }
  }
  </script>

  <style scoped> 
    .patienEditForm {
     margin: auto;
  }
  </style>