import Vue from 'vue'
import VueRouter from 'vue-router'
import PatientsList from '../components/Patient/PatientsList.vue'
import ConsultationsList from '../components/Consultation/ConsultationsList.vue'
import PatientCard from '../views/Patient/PatientCard.vue'

import PatientCreate from '../views/Patient/PatientCreate.vue'
import ConsultationCreate from '../views/Consultation/ConsultationCreate.vue'
import PatientEdit from '../views/Patient/PatientEdit.vue'
import ConsultationEdit from '../views/Consultation/ConsultationEdit.vue'

Vue.use(VueRouter)


const routes = [ //роутинг приложения
  { 
    path: '/', 
    component: PatientsList 
  },

  {
    path: '/patient/create',
    name: 'patient-create',
    component: PatientCreate
  },

  {
    path: '/consultation/create/:id',
    name: 'consultation-create',
    component: ConsultationCreate
  },

  {
    path: '/consultation/edit/:id',
    name: 'consultation-edit',
    component: ConsultationEdit
  },


  {
    path: '/patients',
    name: 'patients-list',
    component: PatientsList
  },

  {
    path: '/patient/:id',
    name: 'patient-details',
    component: PatientCard
  },

  {
    path: '/patient/edit/:id',
    name: 'patient-edit',
    component: PatientEdit
  },

  {
    path: '/consultations',
    name: 'consultations-list',
    component: ConsultationsList
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
