enyo.depends(
	// Layout library
	"$lib/layout",
	"$lib/numeral/numeral.min.js",
	// Onyx UI library
	"$lib/onyx",	// To theme Onyx using Theme.less, change this line to $lib/onyx/source,
	//"Theme.less",	// uncomment this line, and follow the steps described in Theme.less
	// CSS/LESS style files
	"$lib/vertical-slider",
	"style",
	// Model and data definitions
	"data",
	// View kind definitions
	"views",
	// Include our default entry point
	"app.js"
);