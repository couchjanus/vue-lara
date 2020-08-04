<template>
    <section class="comment-box">
        <h3 class="comment-box-header">
            {{ creator_name() }}
            <span class="comment-box-date">{{posted_at()}}</span>
        </h3>
        <p>{{ comment.body }}</p>
    </section>
</template>

<script>

// import {mapActions, mapGetters} from 'vuex';

export default {
    name: `Comment`,
 
    props: ['comment'],
    computed: {
        creator_name(){
            return this.comment.creator.name;
        },
        posted_at() {
            return this.comment.created_at;
        },
    }
};
</script>
