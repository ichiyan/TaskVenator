<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Verify extends Mailable
{
    use Queueable, SerializesModels;

    public $subject;
    public $verification_link;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($subject, $verification_link)
    {
        // If ever u have attributes to add,
        // make sure they are publicly defined above
        // so that u can directly access those attributes
        // inside view('mail.Mail') without explicitly
        // passing them
        $this->subject = $subject;
        $this->verification_link = $verification_link;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('task_venator@gmail.com', 'Task Venator')->subject('User Verification')->view('mail.Mail');
    }
}
