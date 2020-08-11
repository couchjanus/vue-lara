@extends('layouts.app')
@section('intro') @include('layouts.intro') @endsection

@section('content')
<section class="main-news">
    <h2 class="title">RECENT NEWS</h2>
    <article>
        <img class="main-news-img" src="images/recent-news-1-600x450.jpg" alt="">
        <h3 class="article-title"><a href="#">{{ $resent->title }}</a></h3>
        <ul class="info-bar">
            <li class=""><span class="text-muted">by</span><a href="#" class="color-black"><b>{{ $resent->user->name }},
                    </b></a><span class="text-muted">{{ $resent->created_at }}</span></li>
            <li><i class="fas fa-bolt text-yellow"></i>{{ $resent->votes }}</li>
            <li><i class="fas fa-comments text-yellow"></i>{{ $resent->comments_count }}</li>
        </ul>
        <p>{{ $resent->content }}</p>
    </article>
</section>
<!--end of main news-->
<section class="main-crypto-mining-news">
    <h2 class="title">CRYPTO MINING NEWS</h2>
    @foreach ($posts as $post)
    <section class="main-news-w-50">
        <article>
            <img class="main-news-img" src="{{ $post->cover_path }}" alt="">
            <h3 class="article-title"><a href="#">{{ $post->title }}</a></h3>
            <ul class="info-bar">
                <li class=""><span class="text-muted">by</span><a href="#" class="color-black"><b>{{ $post->user->name }},
                        </b></a><span class="text-muted">{{ $post->created_at }}</span></li>
                <li><i class="fas fa-bolt text-yellow"></i>{{ $post->votes }}</li>
                <li><i class="fas fa-comments text-yellow"></i>{{ $post->comments_count }}</li>
            </ul>
        </article>
    </section>     
    @endforeach
    <section class="clear-fix"></section>
</section>
<!--end of main crypto mining news-->
@endsection
