<aside class="sidebar">
    <section class="sidebar-item">
        <ul class="sidebar-list">
        @foreach ($categories as $category)
            <li><b><a href="{{ route('blog.posts.by.category', $category->id) }}">{{ $category->name }}</a></b></li>
        @endforeach
        </ul>
    </section>
    <section class="sidebar-item">
        <h2 class="title">POPULAR POSTS</h2>
        @foreach ($favorites as $item)
        <section class="popular-post">
            <img class="popular-post-img" src="{{ $item->cover_path }}" alt="">
            <section class="popular-post-title">
                <h3>
                    <a href="{{ route('blog.show', $item->slug) }}"><b>{{ $item->title }}</b></a>
                </h3>
                <ul class="info-bar">
                    <li class=""><span class="text-muted">by</span> <a href="#" class="color-black"><b>{{ $item->user->name }},</b></a>
                        <span class="text-muted">{{ $item->created_at }}</span></li>
                </ul>
            </section>
            <section class="clear-fix"></section>
        </section>
        @endforeach
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
</aside>
<!--end of sidebar-->
