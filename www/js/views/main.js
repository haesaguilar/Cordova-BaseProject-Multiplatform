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

			// Bottom Menu
			var menuCollection = new App.Collections.MenuBottom([
				new App.Models.Tab({ type: 'asideLeft', icon: 'reorder'}),
	 			new App.Models.Tab({ text: 'Test', state: 'current', icon: 'check'}),
	 			new App.Models.Tab({ text: 'Test2', icon: 'film'}),
	 			new App.Models.Tab({ text: 'Test3', icon: 'eye-open'})
	 		]);

	 		this.menuView = new App.Views.MenuBottom({
				collection : menuCollection
			});
			App.menu_bottom.show(this.menuView);
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