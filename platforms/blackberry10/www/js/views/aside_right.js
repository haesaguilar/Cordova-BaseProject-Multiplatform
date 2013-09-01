(function(){
	App.Views.AsideRight = Backbone.Marionette.View.extend({
		template: 'aside_right',

		classes: {
		},

		events: {
			// 'click document' : 'onClickAside'
		},

		// Initialize View
		initialize: function(){
			App.Events.on('toggleAsideRight', this.onToggleAsideRight );
			$('#aside_right').on('click', _.bind(this.onClickAside, this));
		},

		// Render View
		render: function(){

		},

		// Event Methods
		onToggleAsideRight: function() {
			$('#aside_right').toggleClass('show');
		},

		onClickAside: function() {
			console.log(1);
			this.onToggleAsideRight();
		}


	});

})();