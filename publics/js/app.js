/**
 * Created by phu on 10/20/17.
 */

var appTodo = angular.module('appTodo', ["xeditable"]);

appTodo.controller('todoController', ['$scope', 'svTodo', function($scope, svTodo) {
    $scope.title = 'Node Todos!';
    $scope.formData = {};
    $scope.todos = [];

    //load data from api
    svTodo.get().then(function (success, error) {
       $scope.todos = success.data;
    });

    $scope.createTodo = function () {
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }
        svTodo.create(todo).then(function (success, error) {
            $scope.todos = success.data;
            $scope.formData.text = "";
        });
    }

    $scope.updateTodo = function (todo) {
        console.log("todo", todo);
        svTodo.update(todo).then(function (success, error) {
            $scope.todos = success.data;
        });
    }

    $scope.deleteTodo = function (todo) {
        console.log(todo);
        svTodo.delete(todo._id).then(function (success, error) {
            $scope.todos = success.data;
        });
    }
}]);
