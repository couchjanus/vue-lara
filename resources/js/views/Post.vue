<template>
  <app-layout>
    <template v-slot:default>
      <main class="main">
        <section class="main-news">
          <h2 class="title">{{ post.title }}</h2>
          <article>
            <img class="main-news-img" :src="`${post.cover_path}`" :alt="`${post.title}`">
            <h3 class="article-title">
              <a href="#">{{ post.title }}</a>
            </h3>
            <ul class="info-bar">
              <li class="">
                <span class="text-muted">by</span>
                <a href="#" class="color-black"
                  ><b>{{ post.user.name }},</b></a
                > at: 
                <span class="text-muted">{{ post.created_at }}</span>
              </li>
              <li><i class="fas fa-bolt text-yellow"></i> {{ post.votes }}</li>
              <li>
                <i class="fas fa-comments text-yellow"></i>
                {{ post.comments_count }}
              </li>
            </ul>
            <p class="footer-p-margin-20">{{ post.content }}</p>
          </article>
          <div class="post-comments">
            <header>
              <h3 class="h6">
                Post Comments
                <span class="no-of-comments">({{ post.comments.length }})</span>
              </h3>
            </header>
            <Comment
              v-for="item in post.comments"
              :comment="item"
              :key="item.id"
            ></Comment>

            <span v-if="IS_LOGGED">
              <comment-form
                v-on:commented="updateComment"
                :postId="post.id"
              ></comment-form>
            </span>
          </div>
        </section>
      </main>
    </template>
    <template v-slot:sidebar>
      <MainSidebar></MainSidebar>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "../components/layouts/AppLayout.vue";
import MainSidebar from "../components/layouts/MainSidebar.vue";
import Comment from "../components/posts/Comment";
import CommentForm from "../components/posts/CommentForm.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: `Post`,
  components: {
    AppLayout,
    MainSidebar,
    Comment,
    CommentForm,
  },
  data() {
    return {
      post: {
        user:{},
        comments:{}
      },
      
    };
  },

  mounted: function () {
    this.loadPost();
  },

  computed: {
    ...mapGetters(["IS_LOGGED", "POST"]),
  },

  methods: {
    loadPost() {
      this.GET_POST_BY_ID(this.$route.params.id).then(() => {
        this.post = this.POST;
      });
    },

    ...mapActions(["GET_POST_BY_ID"]),

    updateComment() {
      this.loadPost();
    },
  },
};
</script>
