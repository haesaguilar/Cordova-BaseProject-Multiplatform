(function() {

	App.MoreexampleRoute = Ember.Route.extend({
		model: function(params) {
			return App.ExampleModel.find(params.example_id);
		}
	});

})();