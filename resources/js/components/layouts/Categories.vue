<template>
    <!--categories-list-->
    <ul class="sidebar-list">
        <li v-for="category in categories" :key="category.id"><a :href="`#`" @click="getCategoryId(category.id)"> {{ category.name }}</a></li>
    </ul>
    <!--/categories-list-->  
</template>

<script>

import {mapActions, mapGetters} from 'vuex';

export default {
  name: `Categories`,
  data() {
    return {
      categories: [],
      posts: [],
      category_id:null,
    };
  },
  created() {
    this.GET_CATEGORIES_API()
      .then(() => {
        this.categories = this.CATEGORIES;
    });
  },
  computed: {
     ...mapGetters([
        'CATEGORIES'
      ]),
  },
  methods: {
    getCategoryId(id){
      this.category_id=id;
      this.GET_POSTS_BY_CATEGORY_API(this.category_id)
      .then(() => {
        this.posts = this.POSTS_BY_CATEGORY;
      });
    },
    ...mapActions([
        'GET_POSTS_BY_CATEGORY_API',
        'GET_CATEGORIES_API'
    ]),
  }
};
</script>
