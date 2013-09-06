(function(global){

	// Create the App
	global.App = new Backbone.Marionette.Application();
	App.Router = App.Router || {};
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

	 		// Main View
			var mainView = new App.Views.Main();
			App.main.show(mainView);

		});

	 	App.start();
	};


})(window);