(function(){
	App.Views.Items = Backbone.Marionette.View.extend({

		// Render View
		render: function(){
			console.log(333);
			this.test.append($('<button/>').text('click').addClass('inline small'));
			this.$el.append(this.test);
			this.renderTemplate({items: this.collection.toJSON()})
		}

	});

})();