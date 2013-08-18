(function(global){
	global.App = Ember.Application.create();
	console.log('test');

	$('body').html('a');

	global.Controllers = App.Controllers = {};
	global.Components = App.Components = {};
	global.Models = App.Store = DS.Store || {};
	global.Views = App.Views = {};
})(window);