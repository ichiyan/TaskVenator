<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use App\Mail\Verify;
use Illuminate\Support\Carbon;

class AuthController extends Controller
{
    public function register(Request $request){

        $validator = Validator::make($request->all(), [
            'name'                          => ['required', 'string', 'max:255'],
            'email'                         => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password'                      => ['required', 'string', 'min:8', 'same:password_confirmation'],
            'password_confirmation'         => ['required', 'string', 'min:8', 'same:password']
        ]);

        if($validator->fails()){
            return response()->json([
                'status'            =>  400,
                'validation_errors' =>  $validator->getMessageBag()
            ]);
        }

        // this will be the token for the email verification
        $verification_token = Str::random(20);

        $user = new User([
            'name'                      => $request->name,
            'email'                     => $request->email,
            'password'                  => Hash::make($request->password),
            'verification_token'        => $verification_token
        ]);

        // save user to db
        $user->save();

        $subject = 'Account Verification';
        $verification_link = 'http://localhost:8000/auth?token='.$verification_token;
        Mail::to($request->email)->send(new Verify($subject, $verification_link));

        // return only the necessary details, dont create/return auth_token here
        return response()->json([
            'status'        => 200,
            'message'       => 'Registered Successfully. Please verify your account by checking your email.',
        ]);

    }

    public function login(Request $request){

        $validator = Validator::make($request->all(), [
            'email'         => ['required'],
            'password'      => ['required'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'                =>  400,
                'validation_errors'     =>  $validator->getMessageBag(),
            ]);
        }

        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status'    =>  401,
                'message'   =>  'Invalid Credentials.',
            ]);
        } 
        
        if (!$user->verified) {
            return response()->json([
                'status'    =>  401,
                'message'   =>  'Please verify your account by checking your email.'
            ]);
        }

    
        /**
         *      u may or may not create session_token here
         *      it's up to u on how u use this
         **/
        // $session_token = Str::random(20);
        // $user->session_token = $session_token;
        // $user->save();

        // This is your auth_token [the thing you set inside localStorage]
        $auth_token = $user->createToken($user->email.'_Token')->plainTextToken;
        return response()->json([
            'status'        => 200,
            'username'      => $user->name,
            'token'         => $auth_token,
            'message'       => 'Logged in Successfully.',
        ]);
            
    }

    public function verify(Request $request) {

        $validator = Validator::make($request->all(), [
            'token' => ['required']
        ]);

        // If token is not specified
        if ($validator->fails()) {
            return response()->json([
                'status'            =>  400,
                'validation_errors' =>  "Token is not specified."
            ]);
        }

        // If token provided is invalid/not found in the db
        $user = User::where('verification_token', $request->token)
                    ->where('verified', false)->first();
        if (!$user) {
            return response()->json([
                'status'            => 404,
                'validation_errors' => 'Invalid token.'
            ]);
        }

        $user->verified = true;
        $user->verification_token = null;
        $user->email_verified_at = Carbon::now()->timestamp;
        $user->save();

        return response()->json([
            'status'        => 200,
            'message'       => 'Verification successful.'
        ]);

    }

    public function logout(){
        //intelephense flags tokens() as undefined method but it works lol
        auth()->user()->tokens()->delete();
        return response()->json([
            'status'=>200,
            'message'=>"Logged Out Successfully",
        ]);
    }

    public function getAuthenticatedUser() {
        $user_id = Auth::id();

        return response()->json([
            'status' => 200,
            'user_id' => $user_id,
            'message' => 'Authenticated user information retrrived successfully.',
        ]);

    }

}
