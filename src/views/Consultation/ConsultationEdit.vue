<template>
  <ConsultationForm class = "consultationForm" :consultation=consultation type="update" />
</template>

<script>

import ConsultationForm from '../../components/Consultation/ConsultationForm.vue';

export default {
  computed: {
    consultation() { // данные для формы редактирования консультации
            return this.$store.state.consultation.consultations.find(c => c.id == this.$route.params.id)
        }
  },

  components: {
    ConsultationForm
  }
}
</script>

<style scoped>
 .consultationForm {
  width: 600px;
  /* margin-left: auto;
  margin-right: auto;
  margin-top: 100px; */
  margin: auto;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  padding: 25px;
}
</style>