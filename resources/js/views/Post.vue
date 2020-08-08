<template>
  <app-layout>
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
                            <li><i class="fas fa-bolt text-yellow"></i> {{post.votes}}</li>
                            <li><i class="fas fa-comments text-yellow"></i> {{post.comments_count}}</li>
                        </ul>
                        <p class="footer-p-margin-20">{{ post.content }}
                        </p>
                    </article>
                    <div class="post-comments">
                        <header>
                            <h3 class="h6">Post Comments  <span class="no-of-comments">({{comments.length}})</span></h3>
                        </header>
                        <Comment v-for="comment in comments" :comment="comment" :key="comment.id"></Comment>

                        <span v-if="IS_LOGGED">
                            <comment-form v-on:commented="updateComment" :postId='post.id'></comment-form>
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
import axios from "axios";
import Comment from '../components/posts/Comment'
import CommentForm from '../components/posts/CommentForm.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
    name: "Post",
    components: {
        AppLayout,
        MainSidebar,
        Comment,
        CommentForm
    },
    data() {
        return {
            post: {
                type: Object,
                default() {
                return {};
                },
            },
            comments: [],
        }
    },
    
    created: function() {
        this.loadPost();
    },
    
    computed: {
       ...mapGetters([
            'IS_LOGGED',
        ]),
    },

    methods: {
        async loadPost() {
            await axios
                .get(`http://127.0.0.1:8000/api/post/${this.$route.params.id}`)
                .then((response) => {
                    this.post = response.data.data;
                    this.comments = this.post.comments;
                });
        },

        updateComment (comment) {
            // console.log(comment);
            // this.comments.push(comment);
            // this.$forceUpdate();
            this.loadPost();
        }, 
    },
};
</script>
