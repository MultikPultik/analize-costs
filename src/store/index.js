import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload;
    },
    addDataToPaymentList(state, payload) {
      state.paymentsList.push(payload);
    },
    setCategoryList(state, payload) {
      state.categoryList = payload;
    }
  },
  getters: {
    getPaymentList: state => state.paymentsList,
    getCategorySum: state => state.categoryList.length
  },
  actions: {
    fetchData(context) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          for (let i = 0; i < 50; i++) {
            items.push({
              date: "01.07.2021",
              category: context.state.categoryList[Math.trunc(Math.random() * context.state.categoryList.length)],
              value: Math.trunc(Math.random() * 180 + 1),
              id: i
            });
          }
          resolve(items);
        }, 500);
      })
        .then(res => context.commit('setPaymentsListData', res));
    },
    fetchCategoryList({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(['Food', 'Education', 'Sport', 'Transport', 'Cafe', 'Restrant'])
        }, 100);
      })
        .then(res => commit('setCategoryList', res));
    }
  }
})
