<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "danishabdullah276@email.com"; // Your email address
    $subject = "Contact Us"; // Email subject
    $message = "Hello,\n\nSomeone wants to contact you.\n"; // Email message

    // Send email
    mail($to, $subject, $message);

    // Redirect back to the page after sending email
    header("Location: {$_SERVER['HTTP_REFERER']}");
    exit;
}
?>
