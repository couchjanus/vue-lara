<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;
use App\Category;

class ViewComposerServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer('layouts.aside', function ($view) {
        $view->with('categories', Category::orderBy('name', 'asc')->get());
        });
        view()->composer('layouts.aside', \App\Http\ViewComposers\FavoritePostsComposer::class);
    }
}


