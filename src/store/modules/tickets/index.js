import { fetchUserTickets } from "@/services/tickets";

/**
 *
 * @type {TicketsInitialState}
 */
const initialState = {
  userTicketsSuccess: false,
  userTicketsError: false,
  userTicketsErrorMessage: [],
};

export default {
  state: initialState,
  getters: {
    userTicketsSuccess: (state) => state.userTicketsSuccess,
    ticketsResponseMessage: (state) => state.userTicketsErrorMessage,
    userTicketsError: (state) => state.userTicketsError,
  },
  mutations: {
    setInitialState(state) {
      state.userTicketsSuccess = false;
      state.userTicketsError = false;
      state.userTicketsErrorMessage = [];
    },
    async setUserTicketsSuccess(state, payload) {
      state.userTicketsSuccess = true;
      state.userTicketsError = false;
    },
    setUserTicketsError(state, payload) {
      state.userTicketsSuccess = false;
      state.userTicketsError = true;
      state.userTicketsErrorMessage = payload;
    },
  },
  actions: {
    async userTickets({ commit }, form) {
      await commit("setInitialState");
      const response = await fetchUserTickets(form);
      if (response.status === 200) {
        await commit("setUserTicketsSuccess", response.data);
        await setCustomer(JSON.stringify(response.data.customer));
      } else {
        commit("setUserTicketsError", response.data);
      }
    },
  },
};
