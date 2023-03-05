import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { SearhStateInterface } from './state';
import actions from './actions';
import mutations from './mutations';

const searchModule: Module<SearhStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  mutations,
  state
};

export default searchModule;
