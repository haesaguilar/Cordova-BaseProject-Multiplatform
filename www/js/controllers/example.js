(function(){

	App.MoreexampleController = Ember.Controller.extend({

		isEditing: false,

		doneEditing: function() {
			this.set('isEditing', false);
		},

		edit: function() {
			this.set('isEditing', true);
		}
	});

})();