<template>
    <aside class="sidebar">
                <section class="sidebar-item">
                    <Categories></Categories>
                </section>
                <section class="sidebar-item">
                    <h2 class="title">POPULAR POSTS</h2>
                    <section class="popular-post">
                        <img class="popular-post-img" src="/images/polular-1-100x100.jpg" alt="">
                        <section class="popular-post-title">
                            <h3>
                                <a href="#"><b>Bitcoin Billionares Hidding in Plain Sight</b></a>
                            </h3>
                            <ul class="info-bar">
                                <li class=""><span class="text-muted">by</span> <a href="#" class="color-black"><b>Olivia Capzallo,</b></a>
                                    <span class="text-muted">Jan 25, 2018</span></li>
                            </ul>
                        </section>
                        <section class="clear-fix"></section>
                    </section>
                    <section class="popular-post">
                        <img class="popular-post-img" src="/images/polular-2-100x100.jpg" alt="">
                        <section class="popular-post-title">
                            <h3 >
                                <a href="#"><b>Bitcoin Billionares Hidding in Plain Sight</b></a>
                            </h3>
                            <ul class="info-bar">
                                <li class=""><span class="text-muted">by</span> <a href="#" class="color-black"><b>Olivia Capzallo,</b></a>
                                    <span class="text-muted">Jan 25, 2018</span></li>
                            </ul>
                        </section>
                        <section class="clear-fix"></section>
                    </section>
                    <section class="popular-post">
                        <img class="popular-post-img" src="/images/polular-3-100x100.jpg" alt="">
                        <section class="popular-post-title">
                            <h3>
                                <a href="#"><b>Bitcoin Billionares Hidding in Plain Sight</b></a>
                            </h3>
                            <ul class="info-bar">
                                <li class=""><span class="text-muted">by</span> <a href="#" class="color-black"><b>Olivia Capzallo,</b></a>
                                    <span class="text-muted">Jan 25, 2018</span></li>
                            </ul>
                        </section>
                        <section class="clear-fix"></section>
                    </section>
                    <section class="popular-post">
                        <img class="popular-post-img" src="/images/polular-4-100x100.jpg" alt="">
                        <section class="popular-post-title">
                            <h3>
                                <a href="#"><b>Bitcoin Billionares Hidding in Plain Sight</b></a>
                            </h3>
                            <ul class="info-bar">
                                <li class=""><span class="text-muted">by</span> <a href="#" class="color-black"><b>Olivia Capzallo,</b></a>
                                    <span class="text-muted">Jan 25, 2018</span></li>
                            </ul>
                        </section>
                        <section class="clear-fix"></section>
                    </section>
                </section>

                <section class="sidebar-item">
                    <h2 class="title">NEWSLETTER</h2>
                    <p>Subscribe to our newsletter to get notification about new updates,
                        information, discount, etc..</p>
                    <form class="subscribe-form">
                        <input type="text" class="subscribe-form-text" placeholder="Your email">
                        <button type="button">b</button>
                        <section class="clear-fix"></section>
                    </form>
                </section>
            </aside><!--end of sidebar-->
</template>

<script>
import Categories from './Categories.vue';
export default {
    name: `MainSidebar`,
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
    components: {
      Categories,
    },
    
};
</script>
