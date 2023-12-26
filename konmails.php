<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex" />

    <title>Email List</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
<?php
// Database credentials
$host = 'localhost';
$db   = 'kskonovalov';
$user = 'kskonovalov';
$pass = 'oY1qK7wB8iI4wA9i';
$charset = 'utf8mb4';

// Set up the DSN (Data Source Name)
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    // Create a PDO instance (connect to the database)
    $pdo = new PDO($dsn, $user, $pass, $options);

    // Prepare a SELECT statement to fetch the last 30 emails
    $sql = "SELECT * FROM messages ORDER BY id DESC LIMIT 30";
    $stmt = $pdo->query($sql);
    echo "<table>";
    echo "<tr><th>Name</th><th>Email</th><th>Message</th><th>Received On</th></tr>";

    // Fetch and display the results
    while ($row = $stmt->fetch()) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($row['name']) . "</td>";
        echo "<td>" . htmlspecialchars($row['email']) . "</td>";
        echo "<td>" . htmlspecialchars($row['message']) . "</td>";
        echo "<td>" . $row['created_at'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";

} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
?>
