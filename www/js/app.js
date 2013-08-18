(function(global){
	global.App = Ember.Application.create({
		ready: function() {
			console.log('App is ready');
		}
	});


	App.Controllers = {};
	App.Components = {};
	App.Store = DS.Store || {};
	App.Views = {};
	App.Models = {};

})(window);