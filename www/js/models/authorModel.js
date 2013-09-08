define([ 'backbone' ],
	function(Backbone) {
		'use strict';
		var AuthorModel = Backbone.Model.extend({
			defaults: {
				id: 0,
				name: 'Not especified',
				email: null
			}
        });
		return AuthorModel;
	}
);
