@extends('layouts.admin')

@section('content')
<!--start index content-->
    <div id="index">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h5 "><i class="fas fa-newspaper"></i> Categories</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <a href="{{ route('admin.categories.create') }}"><button type="button" class="btn btn-sm btn-success">create</button></a>
                    </div>
                </div>
                <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Craetrd At</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    @forelse($categories as $category)
                    <tr>
                        <td>{{ $category->id }}</td>
                        <td>{{ $category->name }}</td>
                        <td>{{ $category->created_at }}</td>
                        <td>
                            <a href="{{ route('admin.categories.edit', $category->id) }}"><button type="button" class="btn btn-sm btn-info my-0 mx-1">Update</button></a>
                            <form action="{{ route('admin.categories.destroy',  $category->id) }}" method="post" style="display: inline-block;">@method('DELETE') @csrf
                                <button title="Delete category" type="submit" class="btn btn-sm btn-danger my-0 mx-1">{{ __('Delete') }}</button>
                            </form>  
                        </td>
                    </tr>
                    @empty
                        <h3 class="text-center">No Categories Yet</h3>
                    @endforelse
                    </tbody>
                </table>
                {{ $categories->links() }}
            </div>
            </div>
            <!--end of index content-->
@endsection
