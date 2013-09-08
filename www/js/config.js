// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file.
  deps: ['main'],
  paths: {
    // JavaScript folders.
    libs: '../js/libs',
    // Libraries.
    jquery: '../js/libs/jquery', // 2.0.0
    handlebars: '../js/libs/handlebars', // 1.0.0
    underscore: '../js/libs/underscore', // 1.5.1
    backbone: '../js/libs/backbone', // 1.0.0
    marionette: '../js/libs/backbone.marionette', // 1.1.0
    text: '../js/libs/require.text' // 2.0.10 :- require plug-in which compiles our templates
  },
  shim: {
    // Backbone library depends on undescore and jQuery.
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    // Marionette depends on undescore, jquery and backbone
    marionette : {
      deps : ['underscore', 'jquery', 'backbone'],
      exports : 'Marionette'
    },
  }
});
