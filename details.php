<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Blu-ray Details</title>
<link href="images/favicon.ico" rel="icon" type="image/x-icon" />
</head>
<body>
<?php

	if(!is_string($getSingle)){
		$row = mysqli_fetch_array($getSingle);
			echo "<img src=\"images/{$row['movies_thumb']}\" alt=\"{$row['movies_title']}\">
				 <h2>{$row['movies_title']}</h2>
				 <p>{$row['movies_year']}</p><br>
				 <p>{$row['movies_storyline']}</p><br>
				 <a href=\"index.php\">Back...</a><br><br>";
		
	}else{
		echo "<p>{$getSingle}</p>";	
	}

?>
</body>
</html>