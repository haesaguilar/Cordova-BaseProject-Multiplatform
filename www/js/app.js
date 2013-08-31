(function(global){

	// Create the App
	global.App = new Backbone.Marionette.Application();
	App.Routers = App.Routers || {};
	App.Views = App.Views || {};
	App.Controllers = App.Controllers || {};
	App.Collections = App.Collections || {};
	App.Models = App.Models ||{};

	// Cordova ready
	// document.addEventListener('deviceready', onDeviceReady, false);

	// onDeviceReady = function(){
	window.onload = function(){

	 	// Add necessary regions
	 	App.addRegions({
		  main: "#main",
		  menu_bottom: "#menu_bottom"
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