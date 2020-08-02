<template>
    <!--categories-list-->
    <ul class="sidebar-list">
        <li v-for="category in categories" :key="category.id">
          <router-link :to="`/category/${category.id}`">{{ category.name }}</router-link>
        </li>
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
    ...mapActions([
        'GET_CATEGORIES_API'
    ]),
  }
};
</script>
