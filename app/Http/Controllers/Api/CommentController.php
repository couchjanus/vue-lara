<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\{Request, Response};
use App\{Comment, Post, User};
use App\Http\Resources\CommentResource;

class CommentController extends Controller
{
    public function index($id)
    {
        $comments = Post::find($id)->comments->all();
        return new CommentResource($comments);
    }
    public function store(Request $request)
    {
        $user = User::find($request->user_id);
        $post = Post::find($request->post_id);
        $post->comment($request->comment, $user);
        return response()->json('ok');
    }
}
