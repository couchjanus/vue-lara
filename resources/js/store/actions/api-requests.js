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

    GET_POST_BY_ID({ commit }, id) {
        return axios
            .get(`/post/${id}`)
            .then((post) => {
                commit('SET_POST_BY_ID_TO_STATE', post.data.data);
                return post;
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
    LOGIN({ commit }, credentials) {
        return axios
            .post('/login', credentials)
            .then(({ data }) => {
                commit('SET_USER_DATA', data)
            })
    },

    LOGOUT({ commit }) {
        commit('CLEAR_USER_DATA');

    },

    REGISTER({ commit }, data) {
        return axios.post("/register", data)
            .then(({ data }) => {
                commit('SET_REGISTER_DATA', data)
            })
    },
    AUTH({ commit }) {
        return axios.get("/user")
            .then(({ data }) => {
                commit('SET_AUTH_USER', data)
            })
    }
}