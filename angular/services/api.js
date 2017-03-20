myapp.service('apiservice',function($http){
	var main=this;
	this.baseUrl='http://www.anapioficeandfire.com/api';
	//service to get info for indexed characters
	this.getInfoForCharacter=function(name){
		return $http.get(main.baseUrl+'/characters?name='+name);
	}
	//service to get info for indexed books
	this.getInfoForBook=function(name){
		return $http.get(main.baseUrl+'/books?name='+name);
	}
	//service to get info for indexed houses
	this.getInfoForHouse=function(name){
		return $http.get(main.baseUrl+'/houses?name='+name);
	}
	//service to get info of all characters
	this.getAllInfoForCharacters=function(){
		return $http.get(main.baseUrl+'/characters');
	}
	
	//service to get info of all books
	this.getAllInfoForBooks=function(){
		return $http.get(main.baseUrl+'/books');
	}
	
	//service to get info of all houses
	this.getAllInfoForHouses=function(){
		return $http.get(main.baseUrl+'/houses');
	}
	this.getInfo=function(url,callback){
		return $http.get(url).then(callback);
	}
})