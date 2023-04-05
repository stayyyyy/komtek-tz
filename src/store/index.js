import Vue from 'vue';
import Vuex from 'vuex';
import patient from './modules/patient';
import consultation from './modules/consultation';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    patient,
    consultation,
  },
});