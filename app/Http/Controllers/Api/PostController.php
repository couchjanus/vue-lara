<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::withCount('comments')->get();
        return new PostResource($posts);
    }

    public function getByCategory($id)
    {
        $posts = Post::where('category_id', $id)->get();
        return new PostResource($posts);
    }

    public function show($id)
    {
        $post = Post::whereId($id)->with('comments')->withCount('comments')->firstOrFail();
        $post->increment('votes');
        return new PostResource($post);
    }
}
