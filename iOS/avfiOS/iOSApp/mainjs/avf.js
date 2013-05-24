/*

Howard Livingston
AVF with Jen Mccrrick
13/05


*/




$("document").ready(function() {
    console.log( "ready!" );
    getTwitter();
    getWeather();
    startWatch();
    
});


document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        navigator.compass.getCurrentHeading(onSuccess, onError);
    }

    function onSuccess(heading) {
        alert('Heading: ' + heading);
    }

    function onError() {
        alert('onError!');
    }



//Compass

var watchID = null;
var start = document.getElementById('startWatch');
var stop = document.getElementById('stopWatch');
//alert(watchID);
//alert(start);
//alert(stop);


//compass.getCurrentHeading implementation
$('#startWatch').click(function (){
	//alert("startWatch was clicked");
	startWatch();
});

$('#stopWatch').click(function (){
	//alert("stopWatch was clicked");
	stopWatch();
});

function onBodyLoad() {
	//alert("Compass onBodyLoad has fired!");
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	//alert("Compass onDeviceReady has fired!");
	navigator.compass.getCurrentHeading(compassSuccess, compassError);
}

function compassSuccess(heading) {
	//alert("compassSuccess has fired.");
//	alert("Heading: " + heading.magneticHeading);
	document.getElementById('compassHeading').innerHTML = heading.magneticHeading;
}

function compassError() {
	alert('Compass has encountered an internal error.');
}


//compass.watchHeading implementation

function startWatch(){
	//update every second
	var options = { frequency: 1000 };
	watchID = navigator.compass.watchHeading(watchSuccess, watchError);
}

function stopWatch() {
	if (watchID) {
		navigator.compass.clearWatch(watchID);
		watchID = null;
	}
}

function watchSuccess(heading) {
	var element = document.getElementById('watchHeading');
	element.innerHTML = 'Heading: ' + heading.magneticHeading;
}

function watchError() {
	alert('Compass as encountered an internal error.');
}











var i;
var l;
//Getting Twitter info
var getTwitter = function (){
	$(".apiTweetList").remove();
	var maketwitterHeader = $('<h2 class="apiTweetList">Blue Man Group</h2>');
	maketwitterHeader.appendTo('#apiTweetList');
//Ajax call
	$.ajax({
		url: 'http://search.twitter.com/search.json?q="%20bluemanGroup%20"&result_type=mixed&callback=?',
		type: 'GET',
		dataType: 'jsonp',
		success: function (tdata){
			console.log(tdata);
				//establish currentTweet variable
				var currentTweets = $();
				//Tell it to we want to attach the list of tweets
				currentTweets.appendTo('#apiTweetList');
				//Loop through the tweets reauested
				for (i=0, l=tdata.results.length; i<l; i++){
				//Create the framework for the list where we'll populate the twitter data	
					$(' ' +
						'<ul class="apiTweetList">' +
							'<li><h3>' + tdata.results[i].from_user + ' ' + '</h3></li>' +
							'<li>' + tdata.results[i].from_user_name + ' ' + '</li>' +
							'<li>' + tdata.results[i].text + ' ' + '</li>' +
							'</ul>'
						).appendTo('#apiTweetList');
				}	
		}
	});
};

//Get weather info---same structure as above


var getWeather = function (){
	$(".weatherTitle").remove();
		var makeweatherTitle = $('<h2 class="weatherTitle">Weather</h2>');
		makeweatherTitle.appendTo('#weatherTitle');
		console.log("procede to ajax!");
			$.ajax({
				url: 'http://api.worldweatheronline.com/free/v1/weather.ashx?q=Boston&format=json&num_of_days=5&key=ugp5sknf56rtzf69nt5p59rx',
				type: 'GET',
				dataType: 'jsonp',
				success: function (weatherData){
					console.log(weatherData);					
					for (i=0, l=weatherData.data.current_condition.length; i<l; i++){
						$('<ul class="weatherCity">' + '<li><h3>Boston, Ma</h3></li>' + '</ul>').appendTo('#weatherTitle');						
							$(' ' +
									'<ul class="weatherList">' +
										'<li> Current Condition: ' + weatherData.data.current_condition[i].weatherDesc[i].value + '</li>' +
										'<li> Temperature: ' + weatherData.data.current_condition[i].temp_F + 'F' + '</li>' +
										'<li> Humidity: ' + weatherData.data.current_condition[i].humidity + '%' + '</li>' +
										'<li> Precipitation: ' + weatherData.data.current_condition[i].precipMM + '"' + '</li>' +
										'<li> Barometric Pressure: ' + weatherData.data.current_condition[i].pressure + 'mb' + '</li>' +
										'<li> Cloud Cover: ' + weatherData.data.current_condition[i].cloudcover + '%' + '</li>' +
										'<li> Visibility: ' + weatherData.data.current_condition[i].visibility + 'miles' + '</li>' +
									'</ul>'
								).appendTo('#weatherTitle');
						}
					}
					
			});
};
	
$('#home').on('pageinit', function(){
		console.log("Home page loaded!");
});

$('#topics').on('pageinit', function(){
		console.log("Topics page loaded!");
});

$('#research').on('pageinit', function(){
		console.log("Research page loaded!");
});

$('#environment').on('pageinit', function(){
		console.log("Environment page loaded!");
});

$('#apiPage').on('pageinit', function(){
		console.log("api page loaded!");
});


