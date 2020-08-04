<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Charly Root',
            'email' => 'root@my.cat',
            'password' => Hash::make('ghbdtncat')
        ]);
    }
}
