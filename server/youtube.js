var Youtube = require('youtube-node');
var youtube = new Youtube();

youtube.setKey('AIzaSyBzkVxhfqYLf8FzkffWuWNXqswk2VR_zcA');
var keyword = 'shelter';
var limit = 10;
youtube.search(keyword, 3, function(err, result) {
    if(err) { console.log(err); return ;}
    console.log(JSON.stringify(result, null, 2));
});

