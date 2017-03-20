myapp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/list.html',

		controller:'tupleController',
		controllerAs:'tupleCtrl'
	})
	.when('/book/:name',{
		templateUrl:'views/book.html',
		controller:'bookControl',
		controllerAs:'bookCtrl'
	})
	.when('/character/:name',{
		templateUrl:'views/character.html',
		controller:'characterController',
		controllerAs:'charCtrl'
	})
	 .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}])