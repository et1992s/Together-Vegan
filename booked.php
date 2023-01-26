<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Together Vegan - Thank you for booking today with us.</title>
</head>
<body>
    <?php
    $firstName=$_POST["first_name"];
    $lastName=$_POST["last_name"];
    $phoneNumber=$_POST["phone_number"];
    $email=$_POST["email_address"];
    $date=$_POST["date"];
    $time=$_POST["time"];
    $howManyPeople=$_POST["select"];

    echo "Thank you for your reservation at Together Vegan
    The booking details are as follows:
    $date $time $howManyPeople "

    ?>
</body>
</html>