require(
	[ 'jquery', 'backbone', 'app', 'router'],
	function($, Backbone, App, router) {
		'use strict';
		
		var deviceReadyDeferred = $.Deferred();

		function start() {
			console.log('Main.start:');
			App.Router = router;
			App.start();
		}

		function onDeviceReady(isDevice) {
			console.log('Main.onDeviceReady: running on a device: ' + (isDevice !== false));
			deviceReadyDeferred.resolve();
		}

		if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB19|IEMobile)/)) {
			// This is running on a device so waiting for deviceready event
			document.addEventListener('deviceready', onDeviceReady, false);
		} else {
			// On desktop don't have to wait for anything
			onDeviceReady(false);
		}

		// Only proceed when PhoneGap and jqm are loaded
		$.when(deviceReadyDeferred).then(start);
	}
);
