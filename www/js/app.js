(function(global){

	// Create the App
	global.App = new Backbone.Marionette.Application();
	App.Routers = App.Routers || {};
	App.Views = App.Views || {};
	App.Controllers = App.Controllers || {};
	App.Collections = App.Collections || {};
	App.Models = App.Models || {};
	App.Events = App.Events || {};
	_.extend(App.Events, Backbone.Events);

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
	 			new App.Models.Item({ id: 1, name: 'Quique', email: 'quique@ckgrafico.com', twitter: 'CKGrafico'}),
	 			new App.Models.Item({ id: 2, name: 'Jorge', email: 'jorge.casar@gmail.com', twitter: 'JorgeCasar'})
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