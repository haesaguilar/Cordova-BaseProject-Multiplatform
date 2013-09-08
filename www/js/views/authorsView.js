define(
	[ 'jquery', 'underscore', 'handlebars', 'backbone', 'app', 'views/authorView' ],
	function($, _, Handlebars, Backbone, App, AuthorView) {
		'use strict';
		var AuthorsView = Backbone.Marionette.CollectionView.extend({
			itemView: AuthorView,
			tagName: 'ul',
			initialize: function(options) {
				this.collection.on('change', this.render, this);
			},
			onRender: function() {
			}
		});
		return AuthorsView;
	}
);
