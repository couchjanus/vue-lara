<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use App\Comment;
use Cviebrock\EloquentSluggable\Sluggable;

class Post extends Model
{
    use Sluggable;

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
    protected $fillable = [
        'title', 'content', 'category_id', 'user_id', 'published', 'cover_path'
    ];

    public function user()
    {
       return $this->belongsTo(User::class);
    }
    public function category()
    {
       return $this->belongsTo(Category::class);
    }

    
    public function getDescriptionAttribute()
    {
        return substr($this->content, 0, 100) . "...";
    }

    public function getShortTitleAttribute()
    {
        return substr($this->title, 0, 27);
    }

    public function getCoverAttribute()
    {
        $parts = explode("/", $this->cover_path);

        return end($parts);
    }
    
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable')->with('creator')->whereNull('parent_id');
    }
}
