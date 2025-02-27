<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Practice 4</title>
  <link rel="stylesheet" href="practice4.css">
</head>
<body>
  <div class="container">
    <h1>EECS 348 Lab Four Practice Four</h1>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $number = $_POST["number"];
      if ($number < 1) {
        echo "<p>Please enter a number greater than or equal to 1.</p>";
      } else {
        echo "<h2>Multiplication Table for 1 to $number</h2>";
        echo "<table>";
        echo "<tr><th>*</th>";
        for ($i = 1; $i <= $number; $i++) {
          echo "<th>$i</th>";
        }
        echo "</tr>";
        for ($i = 1; $i <= $number; $i++) {
          echo "<tr><th>$i</th>";
          for ($j = 1; $j <= $number; $j++) {
            echo "<td>" . ($i * $j) . "</td>";
          }
          echo "</tr>";
        }
        echo "</table>";
      }
    }
    ?>
  </div>
</body>
</html>