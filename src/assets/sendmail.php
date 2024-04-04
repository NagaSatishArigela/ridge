<?php
ob_start();
// Multiple recipients
$to = 'mohanyedidi@gmail.com'; // note the comma

// Subject
$subject = 'MY VILLAGE SHOPE';

// Message
$message = "
<html>
<head>
  <title>MY VILLAGE SHOPE</title>
  <style>
    table th, table td{border:1px solid #f0f0f0; padding:10px;box-shadow:2px 4px 8px 0px rgba(46,61,73,0.2);}
  </style>
</head>
<body>
  <table>
  <tr>
    <th>Name :</th>
    <td>".$_POST['name']."</td>
  </tr>
  <tr>
    <th>Email :</th>
    <td>".$_POST['email']."</td>
  </tr>
  <tr>
    <th>Phone :</th>
    <td>".$_POST['phone']."</td>
  </tr>
  <tr>
	  <th>city :</th>
    <td>".$_POST['city']."</td>
  </tr>

  <tr>
	  <th>message :</th>
    <td>".$_POST['message']."</td> 
  </tr>

  </table>
</body>
</html>
";

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers

$headers[] = 'From: '.$_POST['email'].'';


// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));
header("location:thankyou.html")
?>