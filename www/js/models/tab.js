(function(){

    App.Models.Tab = Backbone.Model.extend({

        defaults: {
        	id: 0,
            type: 'normal', // normal, asideLeft, asideRight, back
            state: 'enabled', // enabled, disabled, hide, current
            icon: null,
            text: null
        }
    });

})();