<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "studentresult";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if($_SERVER['REQUEST_METHOD']=='POST')
{

    $id = $_POST['id'];
 $subject = $_POST['subject'];
 $name = $_POST['name'];
 $outcome = $_POST['outcome'];
 
 

$sql = "INSERT INTO result (id, subject, name, outcome) VALUES('$id',$subject, $name, $outcome)";

if ($conn->query($sql) === TRUE) {
  echo "Student details has been added.";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}
else {
    # code...
}

?>