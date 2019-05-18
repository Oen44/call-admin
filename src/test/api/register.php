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
    else if(!isValid($post->email)) {
        $data->success = false;
        $data->message = "Nieprawidłowy E-Mail!";
        $data = json_encode($data);
        print_r($data);
        return;
    }

    require_once('DB_Functions.php');

    $db = new DB_Functions();

    $user = $db->registerUser($post->username, $post->password, $post->email);

    if($user != null) {
        $data->success = true;
        $data->message = "Rejestracja pomyślna, zostałeś zalogowany.";
        $user = (object)$user;
        $data->user_id = $user->id;
        $data->username = $user->username;
        $data->email = $user->email;
    }
    
    $data = json_encode($data);
    print_r($data);