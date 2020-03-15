import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import {
    LOGIN,
    LOGOUT,
    CHECK_AUTH,
} from "./actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations.type";

const state = {
    errors: null,
    user: {},
    isAuthenticated: !!JwtService.getToken()
};

const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
};

const actions = {
    [LOGIN](context, code) {
        return new Promise(resolve => {
            ApiService.post(code)
                .then(({ data }) => {
                  if(data.is_success){
                    context.commit(SET_AUTH, data.token);
                    resolve(data);
                  }else{
                    context.commit(SET_ERROR, "nieprawidłowe dane");
                  }
                })
                .catch(({ response }) => {
                    context.commit(SET_ERROR, response.data.errors);
                });
        });
    },
    [LOGOUT](context) {
        context.commit(PURGE_AUTH);
    },
    [CHECK_AUTH](context) {
        if (JwtService.getToken()) {
          ApiService.setHeader();
          ApiService.get("user")
            .then(({ data }) => {
              context.commit(SET_AUTH, data.user);
            })
            .catch(({ response }) => {
              context.commit(SET_ERROR, response.data.errors);
            });
        } else {
          context.commit(PURGE_AUTH);
        }
      },
}

const mutations = {
    [SET_ERROR](state, error) {
      state.errors = error;
    },
    [SET_AUTH](state, data) {
      state.isAuthenticated = true;
      state.token = data;
      state.user = {};
      state.errors = {};
      JwtService.saveToken(state.token);
    },
    [PURGE_AUTH](state) {
      state.isAuthenticated = false;
      state.user = {};
      state.errors = {};
      JwtService.destroyToken();
    }
  };

  export default {
    state,
    actions,
    mutations,
    getters
  };