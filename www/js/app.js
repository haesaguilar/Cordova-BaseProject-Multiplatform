(function(global){

	// Create the app
	global.App = Ember.Application.create({
		ready: function() {
			console.log('App is ready');
		}
	});

	// Models Store
	App.Store = DS.Store.extend({
		revision: 13,
  		adapter: DS.FixtureAdapter.create()
	});

	// Router of the App
	App.Router.map(function() {
		this.resource('example', function() {
			this.resource('moreexample', {path: ':example_id'});
		});

		this.resource('test');
	});

})(window);