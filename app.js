$(document).ready(function(){
	$('body').hide();
	$('body').fadeIn(1500);
	$('input').keyup(function(){
		var city= $('#cityName').val();
		var url ="http://api.openweathermap.org/data/2.5/weather?q="+city+"&APIID=567009061891dde9b7ef9da9c65a3c35";
		delay(function(){
			$.get(url, function (res){
			console.log(res);
			var K = res.main.temp;
			$('#forecast').html("<h1>"+res.name+" ("+res.sys.country+")</h1>"+"<p style='font-size: 100px;'>"+(parseInt((K - 273.15)* 1.8 + 32.00))+"&#176F </p><p style='font-size:50px;'>"+res.weather[0].main+"<img src='http://openweathermap.org/img/w/"+res.weather[0].icon+".png'</p>");
		}, "json");
		}, 800);
		return false;

	});

	var delay = (function () {
	var timer = 0;

	return function (callback, ms) {
		clearTimeout(timer);
		timer = setTimeout(callback, ms);
	};
	})();

	var colors = ['#1abc9c','#2ecc71','#3498db','#9b59b6','#34495e','#16a085','#27ae60','#2980b9','#8e44ad','#2c3e50','#f1c40f','#e67e22','#e74c3c','#95a5a6','#f39c12','#d35400','#c0392b','#bdc3c7','#7f8c8d']
		$('#background').each(function() {
    	$(this).css('background-color', colors[Math.floor(Math.random() * colors.length)]);
	});



//Getting the current date and time
var currentdate = new Date();
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
var day = currentdate.getDay();
var month = new Array();
month[0] = "JAN";
month[1] = "FEB";
month[2] = "MAR";
month[3] = "APR";
month[4] = "MAY";
month[5] = "JUN";
month[6] = "JUL";
month[7] = "AUG";
month[8] = "SEPT";
month[9] = "OCT";
month[10] = "NOV";
month[11] = "DEC";
var getDate = month[currentdate.getMonth()] +" "+ day;
var h = currentdate.getHours();
h = h % 12;
h= h ? h : 12;
var datetime = h + ":"  + addZero(currentdate.getMinutes());

document.getElementById("time").innerHTML = datetime;
document.getElementById("date").innerHTML = getDate;



// function getPicture(tags, cb) {
//     var apiKey = "c78216483fd949013b24445615e618e7"; // replace this with your API key

//     // get an array of random photos
//     $.getJSON(
//         "https://api.flickr.com/services/rest/?jsoncallback=?", {
//             method: 'flickr.photos.search',
//             tags: tags,
//             api_key: apiKey,
//             format: 'json',
//             nojsoncallback: 1,
//             per_page: 10 // you can increase this to get a bigger array
//         },
//         function(data) {

//             // if everything went good
//             if (data.stat == 'ok') {
//                 // get a random id from the array
//                 var photo = data.photos.photo[Math.floor(Math.random() * data.photos.photo.length)];

//                 // now call the flickr API and get the picture with a nice size
//                 $.getJSON(
//                     "https://api.flickr.com/services/rest/?jsoncallback=?", {
//                         method: 'flickr.photos.getSizes',
//                         api_key: apiKey,
//                         photo_id: photo.id,
//                         format: 'json',
//                         nojsoncallback: 1
//                     },
//                     function(response) {
//                         if (response.stat == 'ok') {
//                             var the_url = response.sizes.size[5].source;
//                             cb(the_url);
//                         } else {
//                             console.log(" The request to get the picture was not good :\ ")
//                         }
//                     }
//                 );

//             } else {
//                 console.log(" The request to get the array was not good :( ");
//             }
//         }
//     );
// };



});



// getPicture('HD SKIES', function(url) {
//     $("#background").css("background-image", 'url(' +url+')');
// });
// var flickr = new Flickr({
//   api_key: "c78216483fd949013b24445615e618e7"
// });

// flickr.photos.search({
//   text: "red+panda"
// }, function(err, result) {
// 	console.log('slkdfjsdlf');
//   if(err) { throw new Error(err); }
//   	console.log('errorrr');
//   // do something with result
// });

// angular.module('weatherApp', [])

// .factory('openweather', function($http) {
// 	var runRequest = function(city) {
// 		return $http({
// 			method: 'JSONP',
// 			url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APIID=567009061891dde9b7ef9da9c65a3c35"
// 		});
// 	};
// 	return {
// 		event: function(city) {
// 			return runRequest(city);
// 			console.log(city);
// 		}
// 	};
// })

// .controller('WeatherForecastCtrl', function($scope, $timeout, openweather){
// 	var timeout;		
// 	$scope.$watch('city', function(newCity) {
// 		if(newCity) {
// 			if(timeout) $timeout.cancel(timeout);
// 			timeout = $timeout(function() {
// 				openweather.event(newCity).success(function(data, status)	{	
// 					$scope.loc = data;
// 					$scope.forecast = data.list;
// 				});
// 			}, 1000);
// 		}
// 	});
// });