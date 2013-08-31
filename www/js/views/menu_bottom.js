(function(){
	App.Views.MenuBottom = Backbone.Marionette.View.extend({
		tagName: 'ul',
		template: 'menu_bottom',

		classes: {
			normal : 'menu-bottom-tab-normal',
			back : 'menu-bottom-tab-back',
			asideLeft : 'menu-bottom-tab-asideLeft',
			asideRight : 'menu-bottom-tab-asideRight',

			enabled : 'enabled',
			disabled : 'disabled',
			hide : 'hide',
			current : 'current',
		},

		events: {
			'click button' : 'onClickButton'
		},

		// Initialize View
		initialize: function(){

		},

		// Render View
		render: function(){
			this.renderTemplate({tabs: this.collection.toJSON(), templatePrintType: 'html'});
		},

		// Event Methods
		onClickButton: function() {
			alert('click');
		}


	});

})();