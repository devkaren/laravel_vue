import { createStore } from "vuex";
import login from "@/store/modules/auth/login";
import registration from "@/store/modules/auth/registration";
import tickets from "@/store/modules/tickets";
import abuse from "@/store/modules/abuse";

export default createStore({
  modules: {
    login,
    registration,
    tickets,
    abuse
  },
});
