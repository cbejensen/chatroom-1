var app = angular.module('chatroom');

app.service('parseService', function($http){

    this.getData = function(){
        //You'll need to change this url to your local server GET endpoint
        return $http.get('http://localhost:3000/get')
    };

    this.postData = function(message){
        return $http.post('http://localhost:3000/post', {
          text: message,
          objectId: 'n23u5h8hf9sh82n30nvw0n',
          createdAt: Date.now()
        })
    };

});
