import axios from "axios";

export default {
    SET_POSTS_BY_CATEGORY_TO_STATE: (state, products) => {
        state.posts_by_category = products;
    },
    SET_POST_BY_ID_TO_STATE: (state, post) => {
        state.post = post;
    },
    SET_CATEGORIES_TO_STATE: (state, categories) => {
        state.categories = categories;
    },
    SET_POSTS_TO_STATE: (state, posts) => {
        state.posts = posts;
    },

    SET_USER_DATA(state, userData) {
        state.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
        axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    },

    SET_REGISTER_DATA(state, userData) {
        state.user = userData;
        axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
    },

    CLEAR_USER_DATA() {
        localStorage.removeItem('user');
        location.href = '/';
    },
    SET_AUTH_USER(state, user) {
        state.user = user;
    }
}