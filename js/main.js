var app = angular.module('angularBlog', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'homeCtrl'
		})
		.when('/posts', {
			templateUrl: 'posts.html',
			controller: 'postsCtrl'
		})
		.when('/posts/:postId', {
			templateUrl: 'post.html',
			controller: 'postCtrl'
		})
		.otherwise({
			template: '<h1>404 no such page...</h1>'
		})
});

app.controller('homeCtrl', function($scope){
	$scope.model = {
		message: 'This is my Angular Blog'
	}
});

app.controller('postsCtrl', function($scope, postsFactory){
	$scope.posts = postsFactory;
});

app.controller('postCtrl', function($scope, $routeParams, postsFactory){
	var postId = Number($routeParams.postId);
	$scope.post = searchId(postsFactory, postId);
});



app.factory('postsFactory', function(){
	return [
		{
			id: 1,
			name: 'Why Angular is good?',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptate, consectetur recusandae natus? Aperiam eos vel quae esse velit reprehenderit ea quibusdam doloribus quam aliquam accusantium amet fugit placeat tenetur, sequi repudiandae asperiores sapiente repellendus obcaecati, nulla, veniam perferendis voluptate tempora! Tenetur nihil deserunt, odit autem rem, sunt ab, facilis cupiditate atque et dignissimos sint cumque at quibusdam aspernatur aperiam. Voluptates facilis a officiis doloribus, sunt, aut deleniti rem? Quos, dolorum repellendus harum ad quod in hic perspiciatis sint? Omnis sequi dolore, quibusdam modi quisquam obcaecati magni dicta quod asperiores repellat, earum illo debitis sed sit delectus non molestiae. Distinctio accusantium magnam, minus illum sunt impedit quae enim quibusdam veritatis deleniti doloremque, quod accusamus error sit iste vitae dolor. Eligendi laudantium tempora fugiat, animi harum minima nostrum, necessitatibus provident molestiae, omnis quidem similique! Debitis quam, vitae dignissimos inventore optio velit, mollitia iusto. Esse consectetur possimus maiores atque dignissimos sunt eum molestiae aperiam odio architecto asperiores qui nostrum dolorum incidunt mollitia beatae odit, ratione, laborum, quibusdam at officiis! Laudantium, fugit, quibusdam! Odio sit ipsum repudiandae. Quod consectetur possimus at, laborum sequi, omnis, ipsam quibusdam consequatur atque dicta minus voluptatibus cumque quos, accusamus ullam maiores quaerat sed. Alias necessitatibus harum, voluptas quae.'
		},
		{
			id: 2,
			name: 'Why Angular is bad?',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi pariatur dolores magni, vero delectus facere in modi numquam perspiciatis nam odio rerum accusantium enim consectetur velit optio ducimus eos facilis nesciunt! Ea fugit libero eos perferendis eveniet. Similique dicta culpa numquam omnis aliquam voluptatum, est rerum porro atque corporis quos in eos esse sapiente saepe unde aut, repellat vel, voluptates dolorem. Repellat sed molestiae earum enim perferendis est neque fugiat hic dolore, rerum incidunt non assumenda debitis magni praesentium pariatur maxime illo iure ab odit inventore ipsum reprehenderit soluta. Pariatur commodi natus veritatis, optio eum architecto incidunt molestias earum deleniti.'
		}
	]
});

function searchId(obj, id){

	var lenght = obj.length;

	for (var i = 0; i < lenght; i++) {

		if (obj[i].id == id) {
			return obj[i];
		}
	}
}