(function(){
	App.Views.Main = Backbone.Marionette.View.extend({
		// Initialize View
		initialize: function(){

			// Bottom Menu
			var menuCollection = new App.Collections.MenuBottom([
				new App.Models.Tab({ id: 0, type: 'asideLeft', icon: 'reorder', router: 'items'}),
	 			new App.Models.Tab({ id: 1, text: 'UI elem', icon: 'check', router: 'ui'}),
	 			new App.Models.Tab({ id: 2, text: 'Test2', icon: 'film'}),
	 			new App.Models.Tab({ id: 3, text: 'Test3', icon: 'eye-open'}),
	 			new App.Models.Tab({ id: 4, type: 'asideRight', icon: 'ellipsis-vertical'})
	 		]);

	 		this.menuView = new App.Views.MenuBottom({
				collection : menuCollection
			});

			// Aside Right
			this.asideRightView = new App.Views.AsideRight();
		},

		// Render View
		render: function(){
			// this.test.append($('<button/>').text('click').addClass('inline small'));
			// this.$el.append(this.test);
			// this.renderTemplate({items: this.collection.toJSON()})
			App.menu_bottom.show(this.menuView);
			this.menuView.showFirst();
		}

	});

})();