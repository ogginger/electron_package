//main.js: Main electron javascript entrypoint.

const requirejs = require("requirejs");
const config = require("./require_config");

requirejs.config(config);

requirejs([
	"electron",
	"path",
	"url"
], function(
	electron,
	path,
	url
) {
	console.log("Electron main initialized successfully!");
	const App = electron.app;
	const BrowserWindow = electron.BrowserWindow;

	let AppWindow;

	App.on( "ready", function() {
		AppWindow = new BrowserWindow();

		AppWindow.loadURL(url.format({
			"pathname": path.join( __dirname, "index.html" ),
			"protocol": "file", 
			"slashes": true
		}));

		AppWindow.webContents.openDevTools();

		AppWindow.on( "closed", function() {
			AppWindow = null;
		});
	});
});
