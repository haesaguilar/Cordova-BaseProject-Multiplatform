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
				new App.Models.Tab({ id: 0, type: 'asideLeft', icon: 'reorder'}),
	 			new App.Models.Tab({ id: 1, text: 'Test', state: 'current', icon: 'check'}),
	 			new App.Models.Tab({ id: 2, text: 'Test2', icon: 'film'}),
	 			new App.Models.Tab({ id: 3, text: 'Test3', icon: 'eye-open'}),
	 			new App.Models.Tab({ id: 4, type: 'asideRight', icon: 'ellipsis-vertical'})
	 		]);

	 		this.menuView = new App.Views.MenuBottom({
				collection : menuCollection
			});
		},

		// Render View
		render: function(){
			this.test.append($('<button/>').text('click'));
			this.$el.append(this.test);
			this.renderTemplate({items: this.collection.toJSON()})
			App.menu_bottom.show(this.menuView);
		},

		// Event Methods
		onClickButton: function() {
			alert('click');
		}


	});

})();