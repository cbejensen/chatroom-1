var app = angular.module('chatroom');

app.service('parseService', function($http){

    this.getData = function(){
        //You'll need to change this url to your local server GET endpoint
        return $http.get('https://tranquil-garden-6961.herokuapp.com/')
    };

    this.postData = function(message){
        return $http.post('https://tranquil-garden-6961.herokuapp.com/', {
          text: message,
          objectId: 'n23u5h8hf9sh82n30nvw0n',
          createdAt: Date.now()
        })
    };
});
