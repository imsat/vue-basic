<?php

use Illuminate\Http\Request;


Route::apiResource('/users','UserController');
Route::get('/user','UserController@getAuthenticatedUser');
Route::post('/reset/password','UserController@sendResetLinkEmail');


Route::group([
//    'namespace' => 'Auth',
    'middleware' => 'api',
    'prefix' => 'password'
], function () {
    Route::post('create', 'PasswordResetController@create');
    Route::get('find/{token}', 'PasswordResetController@find');
    Route::post('reset', 'PasswordResetController@reset');
});
