(function() {

	var router = Backbone.Marionette.AppRouter.extend({

		controller: new App.Controllers.Main(),

		appRoutes: {
			'items' : 'doItems',
			'ui' : 'doUi'
		}
	});

	App.Router = new router();
	Backbone.history.start();

})();