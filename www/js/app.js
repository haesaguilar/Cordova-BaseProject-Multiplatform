define(
	['jquery', 'underscore', 'backbone', 'marionette' ],
	function($, _, Backbone, Marionette) {
		'use strict';

		var App = new Backbone.Marionette.Application();

		// Adds any methods to be run after the app was initialized.
		App.addInitializer(function() {
			this.initAppEvents();
		});

		App.on('initialize:before', function() {
			console.log('App.initialize:before: ');
		});

		App.on('initialize:after', function(){
			console.log('App.initialize:before: ');
			// Can't use push state on Xcode
			Backbone.history.start({ pushState: false });
		});

		// Set up basic paths.
		App.root = '/';

		App.initAppEvents = function() {
			App.vent.on('navigate', function(e) {
				navigate(e);
			});

			function navigate(url) {
				App.Router.navigate(url, { trigger: true });
			}
		};
		return App;
	}
);
