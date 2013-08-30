(function(global){

	// Create the app
	// global.App = new Backbone.Marionette.Application.create({

	// 	ready: function() {
	// 		console.log('App is ready');
	// 		document.addEventListener('deviceready', this.onDeviceReady, false);

	// 	},

	// 	onDeviceReady: function() {
	//         console.log('Device is Ready');
	//     }
	// });

	// Create the App
	global.App = new Backbone.Marionette.Application();
	App.Routers = App.Routers || {};
	App.Views = App.Views || {};
	App.Controllers = App.Controllers || {};
	App.Collections = App.Collections || {};
	App.Models = App.Models ||{};

	window.onload = function(){

	 	// Add necessary regions
	 	App.addRegions({
		  main: "#main"
		});

	 	// Add initializer
	 	App.addInitializer(function(){

	 		// Sample Collection
	 		var mainCollection = new App.Collections.Items([
	 			new App.Models.Item({ id: 1, name: 'Quique'}),
	 			new App.Models.Item({ id: 2, name: 'Jorge', email: 'my@dot.com'})
	 		]);

	 		// Sample View
			var mainView = new App.Views.Main({
				collection : mainCollection
			});
			App.main.show(mainView);

			new App.Routers.Main();
			Backbone.history.start();
		});

	 	App.start();
	};


})(window);