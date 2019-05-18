<?php

    session_start();

    function addSession($data = []) {
        foreach($data as $session) {
            $_SESSION[$session['key']] = $session['value'];
        }
    }

    function getSession() {
        return $_SESSION;
    }

    function logout() {
        //remove PHPSESSID from browser
        if ( isset( $_COOKIE[session_name()] ) )
            setcookie( session_name(), "", time()-3600, "/" );
        //clear session from globals
        $_SESSION = array();
        //clear session from disk
        session_destroy();
    }