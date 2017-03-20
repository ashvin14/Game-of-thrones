var myapp=angular.module('myApp',['ngRoute']);
myapp.controller('tupleController',['apiservice',function(apiservice){
	var main=this;
	this.characters=[];
	this.houses=[];
	this.books=[];
	this.body=[];
	this.tab=1;
	this.isSelected=function(Tab){
		return Tab===main.tab;
	}
	var loadTupple=function(){
		
		apiservice.getAllInfoForCharacters().then(function Success(response){
			main.characters=main.characters.concat(response.data)

			for(i in main.characters)
				main.characters[i].type="character";
			

		},function failure(){
			alert("some error has occured while loading the APIs");
		})
		apiservice.getAllInfoForBooks().then(function Success(response){
			main.books=main.books.concat(response.data)
			for(i in main.books)
				main.books[i].type="book";
			
		},function failure(){
			alert("some error has occured while loading the APIs");
		})
	
	   apiservice.getAllInfoForHouses().then(function Success(response){
			main.houses=main.houses.concat(response.data)
			for(i in main.houses)
				main.houses[i].type="house";
		
			main.body=main.body.concat(main.books,main.characters,main.houses)
			console.log(main.body)
		},function failure(){
			alert("some error has occured while loading the APIs");
		})

	   
	}
	loadTupple();

	

	
	

}]);
myapp.controller('characterController',['$routeParams','apiservice',function($routeParams,apiservice){
	this.name=$routeParams.name;
	this.character=[];
	var main=this;
	console.log(this.name)
	
	this.isArray=function(element){
		return typeof(element)==='object';
	}
	this.loadInfoForCharacter=function(){
		apiservice.getInfoForCharacter(main.name).then(function(response){
			
			main.character=response.data;
			for(var i in main.character){
				
			main.character[i].url="";
			for(var index in main.character[i].allegiances){
				apiservice.getInfo(main.character[i].allegiances[index],function(response){
					main.character[i].allegiances[index]=response.data.name
				})
			}
			var length=[];
			for(var j in main.character[i].books){
				apiservice.getInfo(main.character[i].books[j],function(response){
					length.push(response.data.name);
					console.log(length)
					//main.character[i].books.push(response.data.name);

			
				})

			}
			main.character[i].books=length;

			
			
		}
			

		},function(){
			alert("some error has occured while loading api")
		})
	}
	
	this.loadInfoForCharacter();
}])
myapp.controller('bookControl',['$routeParams','apiservice',function($routeParams,apiservice){
	this.name=$routeParams.name;
	this.book=[];
	var main=this;
	console.log(this.name)
	
	this.isArray=function(element){
		return typeof(element)==='object';
	}
	this.loadInfoForBook=function(){
		apiservice.getInfoForBook(main.name).then(function(response){
			
			main.book=response.data;
			for(var i in main.book){
				
			main.book[i].url="";
			
			var length=[];
			for(var j in main.book[i].povCharacters){
				apiservice.getInfo(main.book[i].povCharacters[j],function(response){
					length.push(response.data.name);
					console.log(length)
					//main.character[i].books.push(response.data.name);

			
				})

			}
			main.book[i].povCharacters=length;
			var length1=[];
			for(var j in main.book[i].characters){
				apiservice.getInfo(main.book[i].characters[j],function(response){
					length.push(response.data.name);
					console.log(length1)
					//main.character[i].books.push(response.data.name);

			
				})

			}
			main.book[i].characters=length1;

			
			
		}
			

		},function(){
			alert("some error has occured while loading api")
		})
	}
	
	this.loadInfoForBook();
	console.log(this.book)
	

}])

