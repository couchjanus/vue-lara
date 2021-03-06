export default {
    POSTS_BY_CATEGORY(state) {
        return state.posts_by_category;
    },
    CATEGORIES(state) {
        return state.categories;
    },
    POSTS(state) {
        return state.posts;
    },
    USER(state) {
        return state.user;
    },
    IS_LOGGED: state => !!state.user
}