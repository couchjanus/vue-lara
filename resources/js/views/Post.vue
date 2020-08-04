<template>
  <app-layout>
    <template v-slot:intro>
      <MainIntro></MainIntro>
    </template>
    
        <template v-slot:default>
            <main class="main">
                <section class="main-news">
                    <h2 class="title">{{ post.title }}</h2>
                    <article>

                        <img class="main-news-img" :src="`${post.cover_path}`" alt="">
                        <h3 class="article-title">
                            <a href="#">{{ post.title }}</a>
                        </h3>
                        <ul class="info-bar">
                            <li class=""><span class="text-muted">by</span> <a href="#" class="color-black"><b>Olivia Capzallo,</b></a>
                                <span class="text-muted">{{ post.craeted_at }}</span></li>
                            <li><i class="fas fa-bolt text-yellow"></i> 30,190</li>
                            <li><i class="fas fa-comments text-yellow"></i> 47</li>
                        </ul>
                        <p class="footer-p-margin-20">{{ post.content }}
                        </p>
                    </article>
                    
                    <Comments :post_id="post.id"></Comments>
                    
                </section><!--end of main news-->
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
import axios from "axios";
import Comments from '../components/posts/Comments'

export default {
    name: "Post",
    components: {
        AppLayout,
        MainIntro,
        MainSidebar,
        Comments
    },
    data() {
        return {
            post: {
                type: Object,
                default() {
                return {};
                },
            },
            
        }
    },
    mounted: function() {
        this.loadPost();
    },

    methods: {
      async loadPost() {
        await axios
            .get(`http://127.0.0.1:8000/api/post/${this.$route.params.id}`)
            .then((response) => {
                this.post = response.data.data;
            });
      },
    },
};
</script>
