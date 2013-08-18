(function() {

	App.ExampleRoute = Ember.Route.extend({
		model: function() {
			return App.ExampleModel.find();
		}
	});

})();