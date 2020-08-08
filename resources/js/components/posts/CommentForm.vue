<template>
  <div class="comment-box" id="comment">
        <h5 class="card-header">Leave a Comment:</h5>
        <form @keyup.enter="postComment">
            <textarea class="comment" rows="4" required placeholder="your comment ..." v-model="body"></textarea>
            <input :class="{'is-loading': submit}"  type="submit" :disabled="!isValid" @click.prevent="postComment">
        </form>
    </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';

import axios from "axios";
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN':  document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};

export default {
    name: "CommentForm",
    props: ['postId'],
    data() {
      return {
        submit: false,
        body: '',
        user: null,
      }
    },
    created() {
        this.user = this.USER;
    },
    computed: {
        ...mapGetters([
            'USER'
        ]),
        isValid() {
            return this.body !== '';
        },
    },
    methods: {
        postComment() {
            this.submit = true;
            const res = { 
                comment: this.body,
                post_id: this.postId,
                user_id: this.user.id
            };
            axios.post('/comment', res)
                .then(response => {
                    

                    this.$emit('commented', response.data);  
                    this.submit = false;
                    this.body = "";
                    
            }).catch(err => {
                    this.submit = false;
            })
        },
    }

}
</script>
