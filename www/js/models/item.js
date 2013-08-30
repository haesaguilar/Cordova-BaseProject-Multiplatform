(function(){

	App.Models.Item = Backbone.Model.extend({

        defaults: {
            id: 0,
            name: 'Not especified',
            email: null
        },

        initialize: function(){
            console.log("Item model");
        }
    });

})();