define(
	[ 'jquery', 'underscore', 'handlebars', 'backbone', 'app', 'views/authorView', 'text!templates/authors.hbs'  ],
	function($, _, Handlebars, Backbone, App, AuthorView, authorsTemplate) {
		'use strict';
		var AuthorsView = Backbone.Marionette.CompositeView.extend({
			template: Handlebars.compile(authorsTemplate),
			itemView: AuthorView,
			itemViewContainer: '#authorsList',
			initialize: function(options) {
				this.collection.on('change', this.render, this);
			},
			onRender: function() {
			}
		});
		return AuthorsView;
	}
);
