<?php
	
	class DB_Functions {
		private $conn;
		
		function __construct() {
			require_once ('DB_Connect.php');
			
			$db = new DB_Connect();
			$this->conn = $db->connect();
			$this->conn->set_charset('utf8');
        }

        public function loginUser($username, $password) {
			$stmt = $this->conn->prepare("SELECT * FROM `USERS` WHERE `username` LIKE ? AND `password` LIKE MD5(?);");
			$stmt->bind_param("ss", $username, $password);
			$stmt->execute();
			$data = $stmt->get_result()->fetch_assoc();
			$stmt->close();

			return $data;
		}

        public function registerUser($username, $password, $email) {
			$stmt = $this->conn->prepare("INSERT INTO `USERS` (`username`, `password`, `email`) VALUES (?, MD5(?), ?)");
			$stmt->bind_param("sss", $username, $password, $email);
			$stmt->execute();
			$stmt->close();
			$data = [
				"username" => $username,
				"id" => $this->conn->insert_id
			];
			return $data;
		}
    }