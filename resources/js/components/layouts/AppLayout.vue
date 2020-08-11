<template>
<div>
  <section class="app">
    <!-- Header -->
    <main-header></main-header>
    
    <section class="content">
        <!-- intro -->
        <slot name="intro"></slot>
        <!-- Content -->
        <section class="container">
            <slot></slot>
            <slot name="sidebar"></slot>
            <section class="clear-fix"></section>
        </section>
    </section>
</section>
    <!-- Footer -->
    <main-footer></main-footer>
    
</div>
</template>

<script>
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

export default {
    name: `AppLayout`,
    components: {
        MainHeader,
        MainFooter
    },
   
};
</script>
