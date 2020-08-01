import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

export default {
    GET_POSTS_API({ commit }) {
        return axios
            .get(`/posts`)
            .then((posts) => {
                commit('SET_POSTS_TO_STATE', posts.data.data);
                return posts;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    },

    GET_POSTS_BY_CATEGORY_API({ commit }, id) {
        return axios
            .get(`/posts/${id}`)
            .then((posts) => {
                commit('SET_POSTS_BY_CATEGORY_TO_STATE', posts.data.data);
                return posts;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    },
    GET_CATEGORIES_API({ commit }) {
        return axios
            .get(`/categories`)
            .then((categories) => {
                commit('SET_CATEGORIES_TO_STATE', categories.data.data);
                return categories;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    },
}