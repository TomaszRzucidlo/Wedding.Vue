import ApiService from "@/common/api.service";
import {GuestService} from "@/common/api.service";
import {
    GET_GUESTS
} from "./actions.type";
import { SET_GUESTS} from "./mutations.type";

const state = {
    guests:[]
};

const getters = {
    guests(state){
        return state.guests;
    }
};

const actions = {
    async [GET_GUESTS](context) {
        ApiService.setHeader();
        const { data } = await GuestService.get();
        context.commit(SET_GUESTS, data.guests);
        return data;
    },
}

const mutations = {
    [SET_GUESTS](state, guests) {
        state.guests = guests;
      },
  };

  export default {
    state,
    actions,
    mutations,
    getters
  };