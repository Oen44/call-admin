<?php

    $post = json_decode(file_get_contents("php://input"));
    $data = json_decode('{}');
    
    $data->success = false;
    $data->message = "Napotkano nieznany błąd.";

    function isValid($string) {
        return !(empty($string) && isset($string) && is_null($string) && is_string($string));
    }

    if(!isValid($post->username)) {
        $data->success = false;
        $data->message = "Nieprawidłowy login!";
        $data = json_encode($data);
        print_r($data);
        return;
    }
    else if(!isValid($post->password)) {
        $data->success = false;
        $data->message = "Nieprawidłowe hasło!";
        $data = json_encode($data);
        print_r($data);
        return;
    }

    require_once('DB_Functions.php');

    $db = new DB_Functions();

    $user = $db->loginUser($post->username, $post->password);

    if($user != null) {
        $user = (object)$user;
        $data->success = true;
        $data->message = "Zalogowano!";
        $data->user_id = $user->id;
        $data->username = $user->username;
        $data->email = $user->email;

        if($post->remember == true) {
            include_once('SessionManager.php');
            addSession([
                [
                    "key" => "username",
                    "value" => $post->username
                ],
                [
                    "key" => "password",
                    "value" => $post->password
                ]
            ]);
        }
    }
    else {
        $data->success = false;
        $data->message = "Niepoprwany login lub hasło.";
    }
    
    $data = json_encode($data);
    print_r($data);