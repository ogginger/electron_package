//main.js: Main frontend javascript entrypoint.

requirejs.config({
	paths: {},
	shim: {}
});

requirejs([], function() {
	console.log( "Main initialized successfully!" );
});
