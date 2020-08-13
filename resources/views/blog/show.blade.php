@extends('layouts.app')

@section('content')
<section class="main-news">
    <h2 class="title">{{ $post->title }}</h2>
    <article>
        <img class="main-news-img" src="{{ $post->cover_path }}" alt="">
        <h3 class="article-title"><a href="#">{{ $post->title }}</a></h3>
        <ul class="info-bar">
            <li class=""><span class="text-muted">by</span><a href="#" class="color-black"><b>{{ $post->user->name }},
                    </b></a><span class="text-muted">{{ $post->created_at }}</span></li>
            <li><i class="fas fa-bolt text-yellow"></i>{{ $post->votes }}</li>
            <li><i class="fas fa-comments text-yellow"></i>{{ $post->comments_count }}</li>
        </ul>
        <p>{{ $post->content }}</p>
    </article>
</section>

@endsection
