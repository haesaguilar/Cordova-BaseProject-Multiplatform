define([ 'app', 'backbone', 'models/authorModel' ],
	function(App, Backbone, AuthorModel) {
		'use strict';
		var AuthorsList = Backbone.Collection.extend({
			model: AuthorModel,
			initialize: function() {
				console.log("authorCollection:initialize");
			}
		});
		return AuthorsList;
	}
);
