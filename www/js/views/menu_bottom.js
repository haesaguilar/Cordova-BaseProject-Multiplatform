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
			this.changeView(this.collection.get(currentId));
		},

		onClickasideLeft: function() {
			// TODO Toggle aside izquierdo
		},

		onClickasideRight: function() {
			App.Events.trigger('toggleAsideRight');
		},

		showFirst: function(){
			this.changeView(this.collection.models[0]);
		},

		changeView: function(itemCollection){
			var self = this;
			var current = itemCollection;
			if (current.attributes.type != 'asideRight'){
				_.each(this.collection, function(value, key, list){
					var attrs = this.collection.get(key).attributes;
					if(attrs.id == current.id){
						attrs.state = 'current';
					}else{
						attrs.state = 'enabled';
					}
				}, this);

				this.render();
			}

			if(current.attributes.router){
				App.Router.navigate(current.attributes.router)
			}
		}


	});

})();