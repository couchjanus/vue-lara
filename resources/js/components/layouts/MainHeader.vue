<template>
<header>
        <nav class="header">
            <img class="header-logo" src="/images/logo-black.png" alt="">
            <button class="header-menu-burger" onclick="showMenu()" type="button"><i class="fas fa-bars"></i></button>
            <ul class="header-menu" id="menu">
                <li class="header-menu-item"><router-link class="header-menu-item-link" to="/">Home</router-link></li>
                <li class="header-menu-item"><a class="header-menu-item-link" href="">NEWS</a>
                    <span>
                        <a href="#">sub menu 1</a>
                        <a href="#">sub menu 2</a>
                        <a href="#">sub menu 3</a>
                    </span>
                </li>
                <li class="header-menu-item"><a class="header-menu-item-link" href="">EVENTS</a></li>
                <li class="header-menu-item"><router-link class="header-menu-item-link" to="/about">About</router-link></li>
                <li class="header-menu-item">
                    <router-link class="header-menu-item-link" to="/profile" v-if="IS_LOGGED">Profile</router-link>
                    <router-link class="header-menu-item-link" to="/signin" v-else>Login</router-link>
                </li>
                <li class="header-menu-item">
                    <router-link v-if="!IS_LOGGED" class="header-menu-item-link" :to="{ name: 'Register' }">Register</router-link>
                </li>
                <li class="header-menu-item">
                    <button class="header-menu-item-link" @click="logout()" v-if="IS_LOGGED">Logout</button>
                </li>
            </ul>
            <section class="clear-fix"></section>
        </nav><!--end of navbar-->
    </header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: `MainHeader`,
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
     computed: {
        ...mapGetters([
            'IS_LOGGED'
        ])
    },

    methods: {
        logout () {
          this.$store.dispatch('LOGOUT')
        }
    }
};
</script>