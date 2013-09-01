(function(){
	App.Views.MenuBottom = Backbone.Marionette.View.extend({
		tagName: 'ul',
		template: 'menu_bottom',

		classes: {
			tab : 'menu-bottom-tab',
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
			'click .menu-bottom-tab' : 'onClickTab',
			'click .menu-bottom-tab-asideRight' : 'onClickasideRight'
		},

		// Initialize View
		initialize: function(){

		},

		// Render View
		render: function(){
			this.renderTemplate({tabs: this.collection.toJSON(), templatePrintType: 'html'});
		},

		// Event Methods
		onClickTab: function(e) {
			var currentId = parseInt($(e.currentTarget).data('id'));
			var self = this;
			if (this.collection.get(currentId).attributes.type != 'asideRight'){
				_.each(this.collection, function(value, key, list){
					var attrs = this.collection.get(key).attributes;
					if(attrs.id == currentId){
						attrs.state = 'current';
					}else{
						attrs.state = 'enabled';
					}
				}, this);

				this.render();
			}
		},

		onClickasideLeft: function() {
			// TODO Toggle aside izquierdo
		},

		onClickasideRight: function() {
			App.Events.trigger('toggleAsideRight');
		}


	});

})();