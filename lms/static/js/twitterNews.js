var handleTweets = function(tweets){
	var x = tweets.length;
	var element = document.getElementById('upvxProfile');
	var html = '<ul class="carousel-inner">';
        html += '<li class="carousel-item active">' + tweets[0] + '</li>';
	for(var i=1;i<tweets.length;i++){
            html += '<li class="carousel-item">' + tweets[i] + '</li>';
        }
        html += '</ul>';
        element.innerHTML = html;
};

configProfile = {
    "profile": {"screenName": 'upvx'},
    "domId": '',
    "maxTweets": 6,
    "enableLinks": true,
    "showUser": true,
    "showTime": true,
    "dateFunction": '',
    "showRetweet": false,
    "customCallback": handleTweets,
    "showInteraction": false,
    "lang": 'es'
  };
twitterFetcher.fetch(configProfile);
