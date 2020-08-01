@extends('layouts.admin')

@section('content')
<!--start index content-->
            <div id="index">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h5 "><i class="fas fa-newspaper"></i> Posts</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <a href="{{ route('admin.posts.create') }}"><button type="button" class="btn btn-sm btn-success">create</button></a>
                    </div>
                </div>
                <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    @forelse($posts as $post)
                    <tr>
                        <td>{{ $post->id }}</td>
                        <td>{{ $post->title }}</td>
                        <td>{{ $post->category->name }}</td>
                        <td>{{ $post->created_at }}</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-info my-0 mx-1">update</button>
                            <button type="button" class="btn btn-sm btn-danger my-0 mx-1">delete</button>
                        </td>
                    </tr>
                    @empty
                        <h3 class="text-center">No Posts Yet</h3>
                    @endforelse 
                    </tbody>
                </table>
                {{ $posts->links() }}
            </div>
            </div>
            <!--end of index content-->
@endsection
