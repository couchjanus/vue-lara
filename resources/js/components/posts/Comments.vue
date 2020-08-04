<template>
    <div class="post-comments">
    <header>
        <h3 class="h6">Post Comments<span class="no-of-comments">({{ comments.length }})</span></h3>
    </header>
    
    <Comment :key="comment.id" v-for="comment in comments" :comment="comment"></Comment>

    <span v-if="IS_LOGGED">
        <h5 class="card-header">Leave a Comment:</h5>
        <form @keyup.enter="postComment">
            <input name="article_id" type="hidden" value="">
            <textarea class="comment" rows="4" required placeholder="your comment ..." v-model="body"></textarea>
            <input :class="{'is-loading': submit}"  type="submit" :disabled="!isValid" @click.prevent="postComment">
        </form>
    </span>
</div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';
import Comment from './Comment'
import axios from "axios";

export default {
    name: `Comments`,
    components: {Comment},
    props: ["postId"],
    data: () => ({
        comments: [],
        errors: [],
        submit: false,
        body: '',
        user: null
    }),
    created() {
        // this.GET_POSTS_API()
        // .then(() => {
        this.user = this.USER;
        // });
    },
    computed: {
        ...mapGetters([
            'IS_LOGGED',
            'USER'
        ]),
        isValid() {
            return this.body !== '';
        }
    },
  
    methods: {
        // ...mapActions([
        //     'GET_POSTS_API'
    // ]),

    fetchComments: function() {
        axios
            .get("/api/post/" + this.postId + "/comments")
            .then(response => {
                this.comments = response.data.comments;
            })
            .catch(error => {
                this.errors.push(error);
            });
        },
    
    postComment() {
        this.submit = true;
        const res = { 
            comment: this.body,
            post_id: this.postId,
            user_id: this.user.id
        };

        axios.post('/api/comment', res)
            .then(response => {
                this.submit = false;
                this.body = "";
                this.fetchComments();
                if (response.data === 'ok') {
                    console.log('success');
                }
            }).catch(err => {
                this.submit = false;
            })
    },
  }
};
</script>
