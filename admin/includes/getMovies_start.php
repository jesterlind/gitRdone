<?php 
	ini_set('display_errors',1); //php, then JSON
    error_reporting(E_ALL);
	include('connect.php');

	//search the fields movies_id, movies_thumb, movies_title, movies_year in the database
	if(isset($_GET['search'])) {
		$search = $_GET['search'];
		$movieQuery = "SELECT movies_id, movies_thumb, movies_title, movies_year FROM tbl_movies WHERE movies_title LIKE '$search%' ORDER BY movies_title ASC";		
		$getMovies = mysqli_query($link, $movieQuery);	
		
		}else if (isset($_GET['filter'])) {
		$filter = $_GET['filter'];
        $filterQuery = "SELECT tbl_movies.movies_id, tbl_movies.movies_thumb, tbl_movies.movies_title, tbl_movies.movies_year FROM tbl_movies, tbl_cat, tbl_L_mc WHERE tbl_movies.movies_id = tbl_L_mc.movies_id AND tbl_cat.cat_id = tbl_L_mc.cat_id AND tbl_cat.cat_name = '{$filter}'";
        $getMovies = mysqli_query($link, $filterQuery);

		}else{
		$movieQuery = "SELECT movies_id, movies_thumb, movies_title, mobies_year FROM tbl_movies ORDER BY movies_title ASC";//
		$getMovies = mysqli_query($link, $movieQuery);
	}

	$jsonResult='[';		
	while($movResult = mysqli_fetch_assoc($getMovies)){
	// fix JSON looping
	$jsonResult .= json_encode($movResult).',';
	}
	$jsonResult .= ']';
	$jsonResult = substr_replace($jsonResult, '', -2, 1);
	echo $jsonResult;
?>
