<template>
<header>
        <nav class="header">
            <img class="header-logo" src="images/logo-black.png" alt="">
            <button class="header-menu-burger" onclick="showMenu()" type="button"><i class="fas fa-bars"></i></button>
            <ul class="header-menu" id="menu">
                <li class="header-menu-item"><router-link class="header-menu-item-link" to="/">Home</router-link></li>
                <li class="header-menu-item"><a class="header-menu-item-link" href="">NEWS</a>
                    <span>
                        <a href="#">sub menu 1</a>
                        <a href="#">sub menu 2</a>
                        <a href="#">sub menu 3</a>
                    </span>
                </li>
                <li class="header-menu-item"><a class="header-menu-item-link" href="">GUIDES & ANALYTICS</a></li>
                <li class="header-menu-item"><a class="header-menu-item-link" href="">EVENTS</a></li>
                <li class="header-menu-item"><router-link class="header-menu-item-link" to="/about">About</router-link></li>
                <li class="header-menu-item"><a class="header-menu-item-link" href="">ICON CLAENDER</a></li>
                
            </ul>
            <section class="clear-fix"></section>
        </nav><!--end of navbar-->
    </header>
</template>

<script>
export default {
    name: `MainHeader`,
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
    
};
</script>