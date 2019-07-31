<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api')->except(['store', 'sendResetLinkEmail']);
    }

    use SendsPasswordResetEmails;


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return UserResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        return $request->all();
        $this->validate($request, [
            'name'     => 'required',
            'email'    => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);
        $data = $request->all();
        $user = User::create([
            'name' => $data['name'],
            'slug' => Str::slug($data['name']),
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'verified' => User::UNVERIFIED_USER,
            'verification_token' => User::generateVerificationCode(),
            'admin' => User::REGULAR_USER
        ]);

        return new UserResource($user);
    }


    public function getAuthenticatedUser(Request $request)
    {
        return new UserResource($request->user());
    }
}
