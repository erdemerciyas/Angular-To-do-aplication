var app = angular.module('ToDoApp', []);

app.controller('TodoController', function($scope){
	$scope.todos = [
		{"ad":"Yapılacak olan 1", "isDone":false},
		{"ad":"Yapılacak olan 2", "isDone":false},
		{"ad":"Yapılacak olan 3", "isDone":false},
		{"ad":"Yapılacak olan 4", "isDone":false},
		{"ad":"Yapılacak olan 5", "isDone":true},
		{"ad":"Yapılacak olan 6", "isDone":false},
		{"ad":"Yapılacak olan 7", "isDone":false},
		{"ad":"Yapılacak olan 8", "isDone":false}
	]

	$scope.NewToDo = function(){
		$scope.todos.push({
			"ad":$scope.todo,
			"isDone":false
		});
		$scope.todo="";
	}

	$scope.deleteTodos = function(){
		$scope.todos = $scope.todos.filter(function(item){
			return !item.isDone;
		})
	}
});