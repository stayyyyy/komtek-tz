//import { consultationAPI } from "../../api/api.js";

const state = {
  consultations: [
    { id: 1, patientId: 1, date: '05.04.2023', time: '08:35', symptoms: 'Высокая температура, затрудненное дыхание, чихание, кашель и заложенность носа, боли в мышцах и в груди, головная боль и слабость. тошнота, рвота и диарея.', },
    { id: 2, patientId: 1, date: '04.04.2023', time: '18:00', symptoms: 'боль в спине', },
    { id: 3, patientId: 1, date: '03.04.2023', time: '19:00', symptoms: 'головные боли', },
    { id: 1, patientId: 2, date: '05.04.2023', time: '08:35', symptoms: 'Высокая температура, затрудненное дыхание, чихание, кашель и заложенность носа, боли в мышцах и в груди, головная боль и слабость. тошнота, рвота и диарея.', },
    { id: 2, patientId: 2, date: '04.04.2023', time: '18:00', symptoms: 'боль в спине', },
    { id: 3, patientId: 2, date: '03.04.2023', time: '19:00', symptoms: 'головные боли', },
    { id: 1, patientId: 3, date: '05.04.2023', time: '08:35', symptoms: 'Высокая температура, затрудненное дыхание, чихание, кашель и заложенность носа, боли в мышцах и в груди, головная боль и слабость. тошнота, рвота и диарея.', },
    { id: 2, patientId: 3, date: '04.04.2023', time: '18:00', symptoms: 'боль в спине', },
    { id: 3, patientId: 3, date: '03.04.2023', time: '19:00', symptoms: 'головные боли', },
    { id: 1, patientId: 4, date: '05.04.2023', time: '08:35', symptoms: 'Высокая температура, затрудненное дыхание, чихание, кашель и заложенность носа, боли в мышцах и в груди, головная боль и слабость. тошнота, рвота и диарея.', },
    { id: 2, patientId: 4, date: '04.04.2023', time: '18:00', symptoms: 'боль в спине', },
    { id: 3, patientId: 4, date: '03.04.2023', time: '19:00', symptoms: 'головные боли', },
  ]
};

const getters = {
  CONSULTATIONS: state => {
    return state.consultations;
  },
};

const mutations = {
  ADD_CONSULTATION: (state, consultation) => {
    state.consultations.push( { ...consultation, id: state.consultations.at(-1).id + 1});
  },

  UPDATE_CONSULTATION: (state, payload) => {
    state.todos = payload;
  },

  DELETE_CONSULTATION: (state, consultationId) => {
    state.consultations = state.consultations.filter( p => p.id != consultationId);
  },

  // SET_CONSULTATION: (state, data) => {
  //   state.consultations = data;
  // },
};

const actions = {

  // GET_CONSULTATION: async (context, patientId) => {
  //   //let data = await consultationAPI.getConsultations(patientId);
  //    //if (data.status == 200) {
  //   //context.commit('SET_CONSULTATIONS', data);
  //   //}
  // },

  ADD_CONSULTATION: async (context, consultation) => {
    ///let data = await consultationAPI.saveConsultation(consultation);
    //if (data.status == 200) {
      context.commit('ADD_CONSULTATION', consultation);
    //}
  },

  UPDATE_CONSULTATION: async (context, patient) => {
    //let data = await consultationAPI.updateConsultation(consultationAPI);
    //if (data.status == 200) {
      context.commit('UPDATE_CONSULTATION', patient);
    //}
  },

  DELETE_CONSULTATION: async (context, consultationId) => {
    //let data = await consultationAPI.deleteConsultation(consultationId);
    //if (data.status == 200) {
      context.commit('DELETE_CONSULTATION', consultationId);
    //}

  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};