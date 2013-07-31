$(document).ready(function() {

	$('#headlines').on('click', function(e){
		e.preventDefault();
		$.ajax({
			url: "http://api.espn.com/v1/sports/news/headlines",
			data: {
				// enter your developer api key here
				apikey: "8dyv5nrgbf2phtmbkzaw8qu7",
				// the type of data you're expecting back from the api
				_accept: "application/json"
			},
			dataType: "jsonp",
			success: function(data) {
				//clear
				$('ul').remove();
				// create an unordered list of headlines
				var ul = $('<ul/>');
				$.each(data.headlines, function() {
					var li = $('<li/>').text(this.headline);
					ul.append(li)
				});
				// append this list to the document body
				$('body').append(ul);
			},
			error: function() {
			},
		});
	});

	$('#nfl').on('click', function(e){
		e.preventDefault();
		$.ajax({
			url: "http://api.espn.com/v1/sports/football/nfl/teams",
			data: {
				// enter your developer api key here
				apikey: "8dyv5nrgbf2phtmbkzaw8qu7",
				// the type of data you're expecting back from the api
				_accept: "application/json"
			},
			dataType: "jsonp",
			success: function(data) {
				//clear
				$('ul').remove();
				// create an unordered list of headlines
				var ul = $('<ul/>');
				$.each(data.sports[0].leagues[0].teams, function() {
					var li = $('<li/>').text(this.location);
					ul.append(li)
				});
				// append this list to the document body
				$('body').append(ul);
			},
			error: function() {
			},
		});
	});

	$('#ravensnews').on('click', function(e){
		e.preventDefault();
		$.ajax({
			url: "http://api.espn.com/v1/sports/football/nfl/teams/33/news",
			data: {
				// enter your developer api key here
				apikey: "8dyv5nrgbf2phtmbkzaw8qu7",
				// the type of data you're expecting back from the api
				_accept: "application/json"
			},
			dataType: "jsonp",
			success: function(data) {
				//clear
				$('ul').remove();
				// create an unordered list of headlines
				var ul = $('<ul/>');
				$.each(data.headlines, function() {
					var li = $('<li/>').text(this.headline);
					ul.append(li)
				});
				// append this list to the document body
				$('body').append(ul);
			},
			error: function() {
			},
		});
	});
});