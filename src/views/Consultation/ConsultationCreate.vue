<template>
  <ConsultationForm class="consultationForm" type="create" />
</template>

<script>

import ConsultationForm from '../../components/Consultation/ConsultationForm.vue'

export default {


  components: {
    ConsultationForm
  },

}
</script>

<style scoped>
.consultationForm {
  width: 600px;
 
  margin: auto;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  padding: 25px;
}
</style>