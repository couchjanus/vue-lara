<template>
  <app-layout>
    <template v-slot:intro>
      <MainIntro></MainIntro>
    </template>
    
        <template v-slot:default>
            <main class="main">
                <section class="main-crypto-mining-news">
                    <h2 class="title">CRYPTO MINING NEWS</h2>
                    
                    <section class="main-news-w-50" v-for="post in posts" :key="post.id">
                        <article>
                            <img class="main-news-img" :src="`${post.cover_path}`" alt="">
                            <h3 class="article-title">
                                 <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
                            </h3>
                            <ul class="info-bar">
                                <li class=""><span class="text-muted">by</span> <a href="#" class="color-black"><b>Olivia Capzallo,</b></a>
                                    <span class="text-muted">{{ post.create_at }}</span></li>
                                <li><i class="fas fa-bolt text-yellow"></i> 30,190</li>
                                <li><i class="fas fa-comments text-yellow"></i> 47</li>
                            </ul>
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
    name: "Category",
    components: {
        AppLayout,
        MainIntro,
        MainSidebar
    },
    data() {
        return {
            posts: [],
            category_id:null,
        };
    },
    created() {
        this.GET_POSTS_BY_CATEGORY_API(this.$route.params.id)
            .then(() => {
                this.posts = this.POSTS_BY_CATEGORY;
        });
    },
    computed: {
        ...mapGetters([
            'POSTS_BY_CATEGORY'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_POSTS_BY_CATEGORY_API',
        ]),
  }
};
</script>
