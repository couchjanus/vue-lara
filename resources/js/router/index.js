import Vue from "vue";
import VueRouter from "vue-router";

const Home = () =>
    import (`../views/Home.vue`);
const Category = () =>
    import ('../views/Category.vue');
const Post = () =>
    import ('../views/Post.vue');
const About = () =>
    import (`../views/About.vue`);

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: 'Home',
        component: Home,
    },
    {
        path: '/category/:id',
        name: 'Category',
        component: Category,
    },
    {
        path: '/post/:id',
        name: 'Post',
        component: Post,
    },
    {
        path: `/about`,
        name: `About`,
        component: About,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;