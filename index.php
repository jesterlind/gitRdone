<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome to the Finest Selection of Blu-rays on the internets!</title>
	<link href="images/favicon.ico" rel="icon" type="image/x-icon" />
	<link href="css/foundation.css" rel="stylesheet" type="text/css">
	<link href="css/foundation.min.css" rel="stylesheet" type="text/css">
	<link href="css/normalize.css" rel="stylesheet" type="text/css">
    <link href="css/main.css" rel="stylesheet" type="text/css" media="screen">
    <link href='https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz' rel='stylesheet' type='text/css'>
</head>

<body>

<?php include('includes/nav.html'); ?>
    
    <div class="row">
    	<div class="large-5 large-centered medium-5 medium-centered show-for-small-up columns" id="results"></div>
    	<!--pop-up area with search results-->
    </div>
    
 <div class="row" id="content">
        <ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-4"><li class="movies"></li></ul>
        <div class="details"></div>
    </div>
    <br>
    
    <!--featured content-->
    
    <div id="featured" class="large-10 large-centered medium-10 medium-centered show-for-small-up columns"><img src="http://www.jesterlind.com/gitRdone/images/banner1.jpg" alt="Star Wars Episode VII"></div>
    
    
    
    <div id="topContent" class="large-12 medium-12 medium-centered show-for-small-up columns">
    <table width="100%" border="0" cellspacing="10" cellpadding="10">
  <tbody>
    <tr>
      <td><a><img src="images/Ghostbusters.jpg" id="ghostbusters" alt="details.php?id=16"/></a></td>
      <td>
      <h1>Ghostbusters</h1>
      <p>Three odd-ball scientists get kicked out of their cushy positions at a university in New York City where they studied the occult. They decide to set up shop in an old firehouse and become Ghostbusters, trapping pesky ghosts, spirits, haunts, and poltergeists for money. They  wise-crack their way through the city, and stumble upon a gateway to another dimension, one which will release untold evil upon the city. The Ghostbusters are called on to save the Big Apple.</p></td>
      <td>
      <a><img src="images/IronMan2.jpg" id="ironman" alt="details.php?id=25"/></a></td>
      <td>
      <h1>Iron Man 2</h1>
      <p>With the world now aware of his dual life as the armored superhero Iron   Man, billionaire inventor Tony Stark faces pressure from the government,  the press, and the public to share his technology with the military.   Unwilling to let go of his invention, Stark, along with Pepper Potts,   and James "Rhodey" Rhodes at his side, must forge new alliances - and  confront powerful enemies.</p></td>
    </tr>
    <tr>
      <td><a><img src="images/Beetlejuice.jpg" id="beetlejuice" alt="details.php?id=15"/></a></td>
      <td>
      <h1>Beetlejuice</h1>
      <p>Adam and Barbara are a normal couple...who happen to be dead. They have given their precious time to decorate the house and make it their own,   but unfortunately a family is moving in, and not quietly. Adam and Barbara try to scare them out, but ends up becoming the main attraction to the money making family. They call upon Beetlejuice to help, but Beetlejuice has more in mind than just helping.</p></td>
      <td><a><img src="images/Up.jpg"  id="up" alt="details.php?id=13"/></a></td>
      <td><br>
      <h1>Up</h1>
      <p>A young Carl Fredrickson meets a young adventure-spirited girl named Ellie. They both dream of going to a lost land in South America. 70 years later, Ellie has died. Carl remembers the promise he made to her. Then, when he inadvertently hits a construction worker, he is forced to go to a retirement home. But before they can take him, he and his house fly away.</p></td>
    </tr>
  </tbody>
</table>
</div>
<?php include('includes/footer.html'); ?>
<!-- Bootstrap CDN - Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
<script src="js/utility.js"></script>
<script src="js/foundation.js"></script>
</body>
</html>
