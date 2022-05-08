{{-- 
    Feel free to add styling;
    This is what the user will see when he opens his mail
--}}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Verification</title>
</head>
<body>
  <h1>{{$subject}}</h1>
  <p>Please click <a href="{{ $verification_link }}">here</a> to verify your email</p>
  <br />
  <p>Thank you</p>
  <p>Task Venator Team</p>
</body>
</html>