<template>
    <section class="main-crypto-mining-news">
        <h2 class="title">CRYPTO MINING NEWS</h2>
        <section class="main-news-w-50" v-for="post in posts" :key="post.id">
            <article>
                <img class="main-news-img" :src="`${post.cover_path}`" alt="">
                <h3 class="article-title">
                    <router-link :to="`post/${post.id}`">{{ post.title }}</router-link>
                </h3>
                <ul class="info-bar">
                    <li class=""><span class="text-muted">by</span> <a href="#" class="color-black"><b>{{ post.user.name }},</b></a>
                    <span class="text-muted">{{post.created_at}}</span></li>
                    <li><i class="fas fa-bolt text-yellow"></i> {{post.votes}}</li>
                    <li><i class="fas fa-comments text-yellow"></i>  {{post.comments_count}}</li>
                </ul>
            </article>
        </section>
        <section class="clear-fix"></section>
    </section><!--end of main crypto mining news-->
</template>

<script>

import {mapActions, mapGetters} from 'vuex';

export default {
  name: `Posts`,
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.GET_POSTS_API()
      .then(() => {
        this.posts = this.POSTS;
    });
  },

  computed: {
     ...mapGetters([
        'POSTS'
      ]),
  },
  
  methods: {
    ...mapActions([
        'GET_POSTS_API'
    ]),
  }
};
</script>
