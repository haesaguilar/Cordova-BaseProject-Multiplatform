(function(){

    App.Models.Tab = Backbone.Model.extend({

        defaults: {
            type: 'normal', // normal, asideLeft, asideRight, back
            state: 'enabled', // enabled, disabled, hide, current
            icon: null,
            text: null
        }
    });

})();