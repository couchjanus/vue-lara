<template>
  <app-layout>
    <template v-slot:intro>
      <MainIntro></MainIntro>
    </template>
    
        <template v-slot:default>
            <main class="main">
                <section class="main-crypto-mining-news">
                    <h2 class="title">About</h2>
                    <section class="main-news-w-50">
                        <article>
                            <img class="main-news-img" src="images/crypto-news-2-600x450.jpg" alt="">
                            <h3 class="article-title">
                                <a href="#">2017 Market Performance: <br>Crypto vs.Stock</a>
                            </h3>
                            <ul class="info-bar">
                                <li class=""><span class="text-muted">by</span> <a href="#" class="color-black"><b>Olivia Capzallo,</b></a>
                                    <span class="text-muted">Jan 25, 2018</span></li>
                                <li><i class="fas fa-bolt text-yellow"></i> 30,190</li>
                                <li><i class="fas fa-comments text-yellow"></i> 47</li>
                            </ul>
                        </article>
                    </section>

                    <section class="clear-fix"></section>
                </section><!--end of main crypto mining news-->
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

export default {
    name: "About",

    components: {
        AppLayout,
        MainIntro,
        MainSidebar
    }
};
</script>
