import Vue from "vue";
import Vuex from "vuex";
import commonActions from './actions/actions'
import apiRequests from './actions/api-requests'
import mutations from "./mutations/mutations"
import getters from "./getters/getters";

const actions = {...commonActions, ...apiRequests }

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        posts_by_category: [],
        post: {},
        categories: [],
        user: null
    },
    mutations,
    actions,
    getters,
    modules: {

    }
});