import { fetchUserAbuse } from "@/services/abuse";

/**
 *
 * @type {AbuseInitialState}
 */
const initialState = {
  userAbuseSuccess: false,
  userAbuseError: false,
  userAbuseErrorMessage: [],
};

export default {
  state: initialState,
  getters: {
    userAbuseSuccess: (state) => state.userAbuseSuccess,
    abuseResponseMessage: (state) => state.userAbuseErrorMessage,
    userAbuseError: (state) => state.userAbuseError,
  },
  mutations: {
    setInitialState(state) {
      state.userAbuseSuccess = false;
      state.userAbuseError = false;
      state.userAbuseErrorMessage = [];
    },
    async setUserAbuseSuccess(state, payload) {
      state.userAbuseSuccess = true;
      state.userAbuseError = false;
    },
    setUserAbuseError(state, payload) {
      state.userAbuseSuccess = false;
      state.userAbuseError = true;
      state.userAbuseErrorMessage = payload;
    },
  },
  actions: {
    async userAbuse({ commit }, form) {
      await commit("setInitialState");
      const response = await fetchUserAbuse(form);
      if (response.status === 200) {
        await commit("setUserAbuseSuccess", response.data);
        await setCustomer(JSON.stringify(response.data.customer));
      } else {
        commit("setUserAbuseError", response.data);
      }
    },
  },
};
