var getPackage = require('twitter');

var credentials = {
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
}
var API = new getPackage(credentials);
API.stream('statuses/filter', {track: '#GreetMe'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
    var myArray = ["How are you?", "Hope you're doing well! ", "This is JavaScript which is amazing.", "Life is short. Live your fullest. Enjoy your moment"]
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    var statusObj = {status: "Hi @" + tweet.user.screen_name + "," + rand}
    API.post('statuses/update', statusObj,  function(error, tweetReply, response){
      if(error){
        console.log(error);
      }
      console.log(tweetReply.text);
    });
  });
  stream.on('error', function(error) {
    console.log(error);
  });
});
