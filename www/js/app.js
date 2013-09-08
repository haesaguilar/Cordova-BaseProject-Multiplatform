define(
	['jquery', 'underscore', 'handlebars', 'backbone', 'marionette', 'text!templates/main.hbs' ],
	function($, _, Handlebars, Backbone, Marionette, mainTemplate) {
		'use strict';

		var App = new Backbone.Marionette.Application();

		// Adds any methods to be run after the app was initialized.
		App.addInitializer(function() {
			this.initAppEvents();
			this.createAppStructure();
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

		App.createAppStructure = function(){
			// Add regions
			App.addRegions({
				app: "#app"
			});
			// Create the layout
			var AppLayout = Backbone.Marionette.Layout.extend({
				el: '#main',
				template: Handlebars.compile(mainTemplate),
				regions: {
					menu: "#menu",
					content: "#content"
				},
			});
			App.appLayout = new AppLayout();
			App.app.show(App.appLayout);
		}

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
