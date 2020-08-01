<nav class="col-md-2 d-none d-md-block pt-3 bg-sidebar sidebar px-0">
    <a class="text-decoration-none d-block py-1 px-2 mt-0" href="{{ route('admin.home') }}"><i class="fas fa-home"></i> Home</a>
    <a class="text-decoration-none d-block py-1 px-2 mt-3" href="{{ route('admin.categories.index') }}"><i class="fas fa-clipboard-list"></i>
        Category</a>
    <a class="text-decoration-none d-block py-1 px-2 mt-3" href="{{ route('admin.posts.index') }}"><i class="fas fa-newspaper"></i> Article
    </a>
    <a class="text-decoration-none d-block py-1 px-2 mt-3" href="#"><i class="fas fa-bars"></i> Menu</a>
    <a class="text-decoration-none d-block py-1 px-2 mt-3" href="{{ route('admin.comments.index') }}"><i class="fas fa-comments"></i> Comment</a>
    <a class="text-decoration-none d-block py-1 px-2 mt-3" href="{{ route('admin.users.index') }}"><i class="fas fa-users"></i> User</a>
</nav>
