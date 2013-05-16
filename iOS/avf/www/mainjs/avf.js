<<<<<<< HEAD
/*

Howard Livingston
AVF-Jen Mccrrick
Week One
13/05


*/

=======

$("#apiTweetList").on("pageinit", function ()
	{
		var i;
		var j;

			 $.getJSON('http://search.twitter.com/search.json?q="HowardLivingst1"&rpp=6&include_entities=true&result_type=popular&callback=?',

				  function(data) 
				  {
				  console.log(data);

					  for (i=0, j=data.results.length; i<j; i++) 
					  {
					  var image = data.results[i].profile_image_url;
					  var userName = data.results[i].from_user_name;
					  var text = data.results[i].text;

						  $("#tweetList").append(
						  "<li>" + "<img src='" + image + "'/>" +  "<h1>" +
						  userName + "<ul/>" + "<ul/>" + "<p>" + text
						  						   );
					  }
					  $("#tweetList").listview("refresh");

				  });
	 });
>>>>>>> gh-pages

$('#home').on('pageinit', function(){
		console.log("Home page loaded!");
});

<<<<<<< HEAD
$('#topics').on('pageinit', function(){
		console.log("Topics page loaded!");
=======
$('#research').on('pageinit', function(){
		console.log("Research page loaded!");
>>>>>>> gh-pages
});

$('#native').on('pageinit', function(){
		console.log("Native page loaded!");
});

<<<<<<< HEAD
$('#api').on('pageinit', function(){
		console.log("api page loaded!");
});
=======
$('#apiTweetList').on('pageinit', function(){
		console.log("api page loaded!");
});

>>>>>>> gh-pages
