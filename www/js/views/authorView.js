define(
	[ 'jquery', 'underscore', 'handlebars', 'backbone', 'app', 'text!templates/author.hbs' ],
	function($, _, Handlebars, Backbone, App, authorTemplate) {
		'use strict';

		var AuthorView = Backbone.Marionette.ItemView.extend({
			template: Handlebars.compile(authorTemplate),
			tagName: 'li'
		});

		return AuthorView;
	}
);
