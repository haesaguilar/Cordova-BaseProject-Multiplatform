(function(){
	Backbone.Marionette.View = Backbone.Marionette.View.extend({
		template: 'default',
		templateExtension: '.hbs',
		templateFolder: './templates/',
		templatePrintType: 'append',

		renderTemplate: function(options){
			var self = this;
			_.extend(this.options, options);
			this.template = this.options.template || this.template;
			this.templateExtension = this.options.templateExtension || this.templateExtension;
			this.templateFolder = this.options.templateFolder || this.templateFolder;
			this.templatePrintType = this.options.templatePrintType || this.templatePrintType;
			console.log(this.options);
			$.get(this.templateFolder + this.template + this.templateExtension, function(template){
				var templateCompiled = Handlebars.compile(template);
				self.$el[self.templatePrintType](templateCompiled(options));
			});
		}
	});
})();