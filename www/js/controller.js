define(
	[ 'jquery', 'underscore', 'backbone', 'marionette', 'app', 'collections/authorsCollection', 'views/authorsView' ],
	function($, _, Backbone, Marionette, App, AuthorsCollection, AuthorsView) {
		'use strict';

		return {
			handleIndexRoute: function() {
				console.log('Controller.handleIndexRoute:');
				var authors = [
					{ id: 1, name: 'Quique', email: 'quique@ckgrafico.com', twitter: 'CKGrafico'},
					{ id: 2, name: 'Jorge', email: 'jorge.casar@gmail.com', twitter: 'JorgeCasar'}
				];
				var authorsCollection = new AuthorsCollection(authors);
				this.changeView(new AuthorsView({ collection: authorsCollection }));
			},
			changeView: function(view, transition) {
				App.appLayout.content.show(view);
			}
		};
	}
);
