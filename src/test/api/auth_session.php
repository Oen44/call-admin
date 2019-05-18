<?php

    include_once('SessionManager.php');
    $session = (object) getSession();

    $data = json_decode('{}');
    $data->success = false;

    require_once('DB_Functions.php');
    $db = new DB_Functions();

    if(!property_exists($session, 'username')) {
        $data->success = false;
        $data->message = "Nieprawidłowy login sesji!";
        $data = json_encode($data);
        print_r($data);
        return;
    }
    else if(!property_exists($session, 'password')) {
        $data->success = false;
        $data->message = "Nieprawidłowe hasło sesji!";
        $data = json_encode($data);
        print_r($data);
        return;
    }

    $user = $db->loginUser($session->username, $session->password);

    if($user != null) {
        $user = (object)$user;
        $data->success = true;
        $data->message = "Zalogowano!";
        $data->user_id = $user->id;
        $data->username = $user->username;
        $data->password = $user->password;
        $data->email = $user->email;
    }
    
    $data = json_encode($data);
    print_r($data);