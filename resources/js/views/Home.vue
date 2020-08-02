<template>
  <app-layout>
    <template v-slot:intro>
      <MainIntro></MainIntro>
    </template>
    
        <template v-slot:default>
            <main class="main">
                <section class="main-news">
                    <h2 class="title">RECENT NEWS</h2>
                    <article>

                        <img class="main-news-img" src="images/recent-news-1-600x450.jpg" alt="">
                        <h3 class="article-title">
                            <router-link to="/post/1">2017 Market Performance: <br>Crypto vs.Stock</router-link>
                        </h3>
                        <ul class="info-bar">
                            <li class=""><span class="text-muted">by</span> <a href="#" class="color-black"><b>Olivia Capzallo,</b></a>
                                <span class="text-muted">Jan 25, 2018</span></li>
                            <li><i class="fas fa-bolt text-yellow"></i> 30,190</li>
                            <li><i class="fas fa-comments text-yellow"></i> 47</li>
                        </ul>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
                    </article>

                </section><!--end of main news-->
                <Posts></Posts>
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
import Posts from "../components/posts/Posts.vue";

export default {
    name: "Home",

    components: {
        AppLayout,
        MainIntro,
        MainSidebar,
        Posts
    }
};
</script>
