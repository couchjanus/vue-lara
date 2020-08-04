<template>
<app-layout>
    <template v-slot:intro>
      <MainIntro></MainIntro>
    </template>
        <template v-slot:default>
          <main class="main">
            <section class="main-crypto-mining-news">
              <h1 class="title">This is Your Profile page</h1>
              <section class="main-news-w-50">
                <article>
                  <h3>Hello, {{ user.name }}</h3>
                  <span>{{ user.email }}</span>
                </article>
              </section>

              <section class="clear-fix"></section>
            </section><!--end of main crypto mining news-->
          </main>
        </template>
        <template v-slot:sidebar>
            <MainSidebar></MainSidebar>
        </template>
        
  </app-layout>
</template>
<script>
import AppLayout from "../components/layouts/AppLayout.vue";
import MainIntro from "../components/layouts/MainIntro.vue";
import MainSidebar from "../components/layouts/MainSidebar.vue";

import {mapActions, mapGetters} from 'vuex';

export default {
  name: "Profile",
  components: {
      AppLayout,
      MainIntro,
      MainSidebar
  },
  data() {
    return {
      user: {
        type: Object,
        default() {
          return {}
        }
      }
    };
  },
  mounted() {
    this.AUTH().then(() => {
      this.user = this.USER;
    });
  },
  computed: {
     ...mapGetters([
        'USER',
      ]),
  },
  methods: {
    ...mapActions([
        'AUTH',
    ]),
  }
};
</script>
