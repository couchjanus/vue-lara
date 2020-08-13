<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\{Post, Category};
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $posts = Post::has('comments')->get();
        // $posts = Post::withCount('comments')->whereHas('comments', function($query){
        //     $query->where('created_at', '>', now()->subDay());
        // })->get();
        // $posts = Post::where('published', 1)->latest()->with('user')->with('category')->simplePaginate(5);
        // return view('blog.index', compact('posts'));
    }
    
    public function home()
    {
        $posts = Post::where('published', 1)->latest()->with('user')->withCount('comments')->with('category')->where('category_id', 1)->take(2)->get();
        $resent = Post::where('published', 1)->latest()->with('user')->withCount('comments')->with('category')->first();
        return view('index', compact('resent', 'posts'));
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $post = Post::whereSlug($slug)->with('user')->with('category')->withCount('comments')->firstOrFail();
        $Key = 'blog' . $post->id;
        if (!\Session::has($Key)) {
            $post->increment('votes');
            \Session::put($Key, 1);
        }
        return view('blog.show',compact('post'));
    }

    public function getPostsByCategory($id)
    {
        $category = Category::find($id);
        $posts = $category->posts()
              ->where('published', 1)
              ->with('user')
              ->with('category')
              ->withCount('comments')
              ->orderBy('created_at', 'desc')
              ->simplePaginate(7);
        return view('blog.index', compact('posts'));
    }

    public function getByAuthor($id)
    {
        $posts = DB::table('posts')
        ->join('categories', 'categories.id', '=', 'posts.category_id')
        ->join('users', 'users.id', '=', 'posts.user_id')
        ->select('posts.*', 'categories.name', 'users.name As username')
        ->where('user_id', '=', $id)
        ->orderBy('created_at', 'desc')
        ->get();
        return view('blog.index', compact('posts'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}
