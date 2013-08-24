(function(nav){
	App.Notifications = Ember.Component.extend({

		// Init notifications
	    init: function() {
	    	this.test();
	    },

	    // testing
	    test: function() {
    		nav.notification.alert(
			    'Message',
			    $.noop(),
			    'Title',
			    'Button'
			);
		}
	});
})(window.navigator);