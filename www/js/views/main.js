(function(){
	App.Views.Main = Backbone.Marionette.View.extend({

		tagName: 'p',
		className: 'test',
		template: 'items',

		classes: {
			test : 'testing'
		},

		events: {
			'click button' : 'onClickButton'
		},

		// Initialize View
		initialize: function(){
			this.test = $('<div/>').text('testing');
		},

		// Render View
		render: function(){
			this.test.append($('<button/>').text('click'));
			this.$el.append(this.test);
			this.renderTemplate({items: this.collection.toJSON()})
		},

		// Event Methods
		onClickButton: function() {
			alert('click');
		}


	});

})();