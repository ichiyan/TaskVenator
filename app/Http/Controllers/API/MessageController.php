<?php

namespace App\Http\Controllers\API;

use App\Events\PartyMessageEvent;
use App\Http\Controllers\Controller;
use App\Models\Message;
use App\Models\User;
use App\Models\Party;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Events\PrivateMessageEvent;
use App\Models\PartyMember;
use App\Models\UserInfo;
use App\Models\UserMessage;

class MessageController extends Controller
{

    public function sendPartyMessage(Request $request){
        $request->validate([
            'message' => 'required',
            'party_id' => 'required',
        ]);

        $sender_id = Auth::id();
        $party_id = $request->party_id;

        $message = new Message();
        $message->message = $request->message;

        if ($message->save()) {
            try {
                $message->users()->attach($sender_id, ['party_id' => $party_id]);
                $sender = UserInfo::where('id', '=', $sender_id)->first();

                $data = [];

                $data['sender_id'] = $sender_id;
                $data['sender_name'] = $sender->username;
                $data['type'] = 2;                      //party message type
                $data['party_id'] = $party_id;
                $data['content'] = $message->message;
                $data['created_at'] = $message->created_at;
                $data['message_id'] = $message->id;

                event(new PartyMessageEvent($data));

                return response()->json([
                    'status' => 200,
                    'data' => $data,
                    'message' => 'Message sent successfully',
                ]);

            } catch (Exception $e){
                $message->delete();
            }

        }
    }

    public function getPreviousMessages(){

        $messages = DB::table('user_messages')
                    ->join('messages', 'user_messages.message_id', '=', 'messages.id')
                    ->join('users', 'user_messages.sender_id', '=', 'users.id')
                    ->select('user_messages.sender_id', 'users.name', 'messages.id', 'messages.message', 'messages.created_at')
                    ->latest('messages.created_at')
                    ->take(100)
                    ->get()
                    ->reverse()
                    ->values()
                    ->all();

        $last_opened_chat = UserInfo::where('id', '=', Auth::id())->first()->pluck('last_opened_chat');


        return response()->json([
            'status' => 200,
            'data' => $messages,
            'last_opened_chat' =>  $last_opened_chat,
            'message' => 'Message sent successfully',
        ]);

    }


    //Test private chat function
    public function getParticipants(){
        //test private chat with any user
        $users = User::where('id', '!=', Auth::id())->get();
        //test private with user whose id=2
        $chat_user_info = User::findOrFail(2);
        $auth_user_info = User::find(Auth::id());


        return response()->json([
            'status'=>200,
            'users'=>$users,
            'chat_user_info'=>$chat_user_info,
            'auth_user_info'=>$auth_user_info,
        ]);

    }

    //Test private chat function
    public function sendMessage(Request $request){
        $request->validate([
            'message' => 'required',
            'receiver_id' => 'required',
        ]);

        $sender_id = Auth::id();
        $receiver_id = $request->receiver_id;

        $message = new Message();
        $message->message = $request->message;

        if ($message->save()) {
            try {
                $message->users()->attach($sender_id, ['receiver_id' => $receiver_id]);
                $sender = User::where('id', '=', $sender_id)->first();

                $data = [];

                $data['sender_id'] = $sender_id;
                $data['sender_name'] = $sender->name;
                $data['receiver_id'] = $receiver_id;
                $data['content'] = $message->message;
                $data['created_at'] = $message->created_at;
                $data['message_id'] = $message->id;

                event(new PrivateMessageEvent($data));

                return response()->json([
                    'status' => 200,
                    'data' => $data,
                    'message' => 'Message sent successfully',
                ]);

            } catch (Exception $e){
                $message->delete();
            }

        }
    }

}
