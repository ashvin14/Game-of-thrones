

myapp.directive('myBook',function(){
return{
restrict:'E',
template:"<div class='col-md-4' >"+
	
	"<a href='#/book/{{tuple.name}}' role='button' >"+
		"<div class='view'>"+
			"<div class='bookCover'>{{tuple.name}}</div>"+
		"</div>"+
	"</a>"+
	
"</div>"



}
})
myapp.directive('myHouse',function(){
return{
restrict:'E',
template:"<div class='col-md-4'>"+
	
	"<a href='#/house/{{tuple.name}}' role='button' >"+
		"<div class='view'>"+
			"<div class='bookCover'>{{tuple.name}}</div>"+
		"</div>"+
	"</a>"+
	
"</div>"



}
})
myapp.directive('myCharacter',function(){
return{
restrict:'E',
template:"<div class='col-md-4' >"+
	
	"<a href='#/character/{{tuple.name}}' role='button' >"+
		"<div class='view'>"+
			"<div class='bookCover'>{{tuple.name}}</div>"+
		"</div>"+
	"</a>"+
	
"</div>"



}
})