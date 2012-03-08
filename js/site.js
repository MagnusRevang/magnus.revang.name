$(function () { // onDOMLoaded
	// change .no-js class on BODY tag to .js to enable js specific styles
	$(".no-js").removeClass("no-js").addClass("js");

	// break out of frames
	if (window.self !== window.top) {
		window.top.location = window.self.location;
	}
});