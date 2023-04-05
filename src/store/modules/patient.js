//import { patientAPI } from "../../api/api.js";

const state = {
  patients: [
    { id : 1, surname: 'Иванов', name: 'Петр', patronymic: 'Васильевич', dateOfBirth: '11.05.1985', sex: 'Мужской', snils: '87481460243',   weight: '82', height: '185', age: '37', } ,
    { id : 2, surname: 'Петров', name: 'Иван', patronymic: 'Генадьевич', dateOfBirth: '07.11.1995', sex: 'Мужской', snils: '54743106181',   weight: '76', height: '178', age: '40', },
    { id : 3, surname: 'Смирнов', name: 'Олег', patronymic: 'Иванович', dateOfBirth: '12.09.2001', sex: 'Мужской', snils: '71221450032',  weight: '84', height: '181', age: '25', } ,
    { id : 4, surname: 'Козлова', name: 'Елена', patronymic: 'Валерьевна', dateOfBirth: '08.01.1997', sex: 'Женский', snils: '75960111110',  weight: '62', height: '164', age: '34', } 
  
  ],
  search: '',

};


const getters = {
  PATIENTS: state => {
    return state.patients;
  },
};

const mutations = {
  UPDATE_PATIENT: (state, patient) => {
    state.patients = state.patients.map(p => p.id === patient.id ? patient : p);
  },

  ADD_PATIENT: (state, patient) => {
    state.patients.push(patient);
  },

  DELETE_PATIENT: (state, patientId) => {
    state.patients = state.patients.filter( p => p.id != patientId);
  },

  // SET_PATIENTS: (state, data) => {
  //   state.patients = data;
  // },
};

const actions = {

  // GET_PATIENTS: async (context) => {
  //   //let data = await patientAPI.getPatients();
  //    //if (data.status == 200) {
  //   //context.commit('SET_CONSULTATIONS', data);
  //   //}
  // },

  UPDATE_PATIENT: async (context, patient) => {
    //let data = await patientAPI.updatePatient(patient);
    //if (data.status == 200) {
      context.commit('UPDATE_PATIENT', patient);
    //}
  },

  SAVE_PATIENT: async (context, patient) => {
    //let data = await patientAPI.savePatient(patient);
    //if (data.status == 200) {
      context.commit('ADD_PATIENT', { ...patient, id: state.patients.at(-1).id + 1});
    //}
  },
  DELETE_PATIENT: async (context, patientId) => {
    //let data = await deleteAPI.savePatient(patient);
    //if (data.status == 200) {
      context.commit('DELETE_PATIENT', patientId);
    //}
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};