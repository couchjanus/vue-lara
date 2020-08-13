<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <section class="app">

            <header>
                <nav class="header">
                    <a href="{{ url('/') }}"><img class="header-logo" src="/images/logo-black.png" alt=""></a>
                    <button class="header-menu-burger" onclick="showMenu()" type="button"><i
                            class="fas fa-bars"></i></button>
                    <ul class="header-menu" id="menu">
                        <li class="header-menu-item"><a class="header-menu-item-link" href="">NEWS</a>
                            <span>
                                <a href="#">sub menu 1</a>
                                <a href="#">sub menu 2</a>
                                <a href="#">sub menu 3</a>
                            </span>
                        </li>
                        <li class="header-menu-item"><a class="header-menu-item-link" href="">GUIDES & ANALYTICS</a>
                        </li>
                        <li class="header-menu-item"><a class="header-menu-item-link" href="">EVENTS</a></li>
                        <li class="header-menu-item"><a class="header-menu-item-link" href="">EXPLAINED</a></li>
                        <li class="header-menu-item"><a class="header-menu-item-link" href="">ICON CLAENDER</a></li>

                        <!-- Authentication Links -->
                        @guest
                        <li class="header-menu-item">
                            <a class="header-menu-item-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                        </li>
                        @if (Route::has('register'))
                        <li class="header-menu-item">
                            <a class="header-menu-item-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                        </li>
                        @endif
                        @else
                        <li class="header-menu-item dropdown">
                            <a class="header-menu-item-link" href="">{{ Auth::user()->name }} <span
                                    class="caret"></span></a>
                            <span>
                                <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">{{ __('Logout') }}</a>
                                <a href="#">sub menu 2</a>
                                <a href="#">sub menu 3</a>
                            </span>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </li>
                        @endguest
                    </ul>
                    <section class="clear-fix"></section>
                </nav>
                <!--end of navbar-->
            </header>

            <section class="content">
                @yield('intro')
                <section class="container">
                    <main class="main">
                        @yield('content')
                    </main>
                    @include('layouts.aside')
                    <section class="clear-fix"></section>
                </section>
                <!--end of container-->
            </section>

        </section>

        <footer class="footer">
            <section class="app bg-map">
                <section class="footer-row">
                    <section class="footer-col">
                        <img class="footer-logo" src="images/logo-white.png" alt="">
                        <section class="clear-fix"></section>
                        <p class="footer-p">Bit coin is an open-source, peer-to-peer, digital decentralized
                            cryptocurrency.
                            Powered by blockchain technology, its defining characteristic is</p>
                        <p class="footer-p footer-p-margin-20">
                            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                            Copyright 2019 All rights reserved | This template is made with <i class="ion-heart"
                                aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        </p>
                    </section>
                    <section class="footer-col">
                        <h3 class="footer-section-title">MOST POPULAR</h3>
                        <section class="footer-section-link-item">
                            <a href="#">Its Make or Break Time for Bitcoin</a>
                            <p>Jan 25, 2018</p>
                        </section>
                        <section class="footer-line"></section>
                        <section class="footer-section-link-item">
                            <a href="#">Its Make or Break Time for Bitcoin</a>
                            <p>Jan 25, 2018</p>
                        </section>
                    </section>
                    <section class="footer-col">
                        <h3 class="footer-section-title">MOST POPULAR</h3>
                        <section class="footer-section-link-item">
                            <a href="#">Its Make or Break Time for Bitcoin</a>
                            <p>Jan 25, 2018</p>
                        </section>
                        <section class="footer-line"></section>
                        <section class="footer-section-link-item">
                            <a href="#">Its Make or Break Time for Bitcoin</a>
                            <p>Jan 25, 2018</p>
                        </section>
                    </section>
                    <section class="clear-fix"></section>
                </section>
                <section class="footer-line"></section>
                <section class="footer-row">
                    <ul class="footer-menu">
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="">Jobs advertising</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                    <ul class="footer-social-network">
                        <li><a href=""><i class="fab fa-facebook"></i></a></li>
                        <li><a href=""><i class="fab fa-twitter"></i></a></li>
                        <li><a href=""><i class="fab fa-google-plus-g"></i></a></li>
                        <li><a href=""><i class="fab fa-instagram"></i></a></li>
                        <li><a href=""><i class="fab fa-bitcoin"></i></a></li>
                    </ul>
                    <section class="clear-fix"></section>
                </section>
            </section>
            <!--end of second app section-->
            <section class="clear-fix"></section>
        </footer>
        <!--end of footer-->
    </div>
</body>

</html>
