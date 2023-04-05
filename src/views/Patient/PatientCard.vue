<template>
    <div class="patientCard">
        <PatientForm  class = "patientForm" :patient=patient type="edit" />
        <ConsultationsList class = "consultationList" :name=patientConsultations />
    </div>
</template>

<script>

import ConsultationsList from '../../components/Consultation/ConsultationsList.vue';
import PatientForm from '../../components/Patient/PatientForm.vue';

export default {
    data() {
        return {
        }
    },

    computed: {
         patientConsultations() { // получаем из state консультации пациента
            return this.$store.state.consultation.consultations.filter(c => c.patientId == this.$route.params.id)
        },
        patient() { // получаем данные пациента
            return this.$store.state.patient.patients.find(p => p.id == this.$route.params.id)
        }
    },
    components: {
        ConsultationsList,
        PatientForm
    },
    methods: {

    }
}
</script>

<style scoped>

.patientForm >>> input.el-input__inner{
    background-color: white;
    color: #606266;
    cursor: text;
}
.patientForm >>> span.el-radio__inner {
    color: #606266;
    cursor: text!important;
}

.patientForm >>> span.el-radio__label{
    color: #606266!important;
    cursor: text!important;
}

.patientForm >>> .el-form-item {
    margin-bottom: 15px;
}

.patientForm >>> .submitButton { 
    float: right;
}
.patientForm {
    width: 350px;
    margin-right: 20px;
    max-height: 100%;
}
.consultationList{
    max-height: 100%;
}
.consultationList >>> .cell{
     word-break: normal!important;
 }


.patientCard{
    display: flex;
    max-height: calc(100vh - 75px)!important;
}
</style>