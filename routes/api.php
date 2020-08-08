<?php

use Illuminate\Http\{Request, Response};
use Illuminate\Support\Facades\Route;
use App\User;
use Illuminate\Support\Facades\Hash;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', function(Request $request) {
    $data = $request->validate([
        'email' => 'required|email',
        'password' => 'required'
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response([
            'message' => ['The provided credentials are incorrect.']
        ], 404);
    }

    $token = $user->createToken('my-app-token')->plainTextToken;

    $response = [
        'user' => $user,
        'token' => $token
    ];

    return response($response, 201);
});

Route::group(['namespace' => 'Api',], function() {
    Route::get('posts', 'PostController@index');
    Route::get('categories', 'CategoryController@index');
    Route::get('posts/{id}', 'PostController@getByCategory');
    Route::get('post/{id}', 'PostController@show')->name('api.post.show');
    Route::post('register', 'RegisterController@register');

    Route::post(
        '/comment',
        function (Request $request) {
            $user = \App\User::find($request->user_id);
            $post = \App\Post::find($request->post_id);
            // dump($post);
            $post->comment($request->comment, $user);
            return response()->json(['comment'=>\App\Post::find($request->post_id)->comments->first()], Response::HTTP_OK);
        }
    );
});