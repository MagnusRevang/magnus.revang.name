// This script file will be asynchronously be loaded at the end of the
// html document and thus it should be after DOM is loaded
(function () {
	// utility classes
	function hasClass (e,c) {
		return e.className.match(new RegExp("(\\s|^)"+c+"(\\s|$)"));
	}

	function addClass (e,c) {
		if (!this.hasClass(e,c)) {
			e.className += " "+c;
		}
	}

	function removeClass (e,c) {
		if (hasClass(e,c)) {
			e.className = e.className.replace(new RegExp("(\\s|^)"+c+"(\\s|$)")," ");
		}
	}

	function changeClass (e, p, n) {
		removeClass(e, p);
		addClass(e, n);
	}

	// change .no-js class on HTML tag to .js to enable js specific styles
	// $(".no-js").removeClass("no-js").addClass("js");
	(function (d) {
		var e = d.getElementsByTagName("html");
		changeClass(e,"no-js","js");
	})(document);

	// break out of frames
	(function (w) {
		var s=w.self, t=w.top;
		if (s !== t) {
			t.location = s.location;
		}
	})(window);
})();