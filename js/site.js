// Smallest AJAX Lib adopted from http://www.blackmac.de/archives/31-Smallest-JavaScript-AJAX-library-ever!.html
// Only works in IE7+ and with GET requests
function mAjax(url, callbackFunction)
{
	var t = this, w = window, r = t.request;
	t.stateChange = function (object) {
		if (r.readyState === 4) {
			callbackFunction(r.responseText);
		}
	};

	t.callbackFunction = callbackFunction;
	t.url = url;
	r = w.XMLHttpRequest;

	if (r) {
		r.onreadystatechange = function () {
			t.stateChange.apply(t, [t]);
		};
		r.open("GET", url, true);
		r.send();
	}
}

// Caching based on http://dustindiaz.com/javascript-cache-provider
function Cache () {
	this.cache = {};
}

try {
	Cache.hasLocalStorage = ('localStorage' in window) && window.localStorage !== null;
} catch (e) {
	Cache.hadLocalStorage = 0;
}



// URL Manipulation
function pushState (path) {

}

function popState (path) {

}

// Router
function loadPath (path) {
	// TODO: GET TEMPLATE (Caching? Localstorage?)
	// TODO: GET DATA
	// TODO: PUT DATA INTO TEMPLATE
	// TODO: PUT RENDER INTO APPRORIATE PLACE
	// TODO: PUSHSTATE
}

// Cross browser DOMContentReady adopted from http://javascript.nwbox.com/ContentLoaded/
(function (win, fn) {
	var done = false,
		top = true,
		doc = win.document, root = doc.documentElement,
		add = doc.addEventListener ? 'addEventListener' : 'attachEvent',
		rem = doc.addEventListener ? 'removeEventListener' : 'detachEvent',
		pre = doc.addEventListener ? '' : 'on',
		init = function(e) {
				if (e.type === 'readystatechange' && doc.readyState !== 'complete') {
					return;
				}
				(e.type === 'load' ? win : doc)[rem](pre + e.type, init, false);
				if (!done && (done = true)) {
					fn.call(win, e.type || e);
				}
			},
		poll = function() {
				try { root.doScroll('left'); } catch(e) { setTimeout(poll, 50); return; }
				init('poll');
			};

	if (doc.readyState === 'complete') {
		fn.call(win, 'lazy');
	} else {
		if (doc.createEventObject && root.doScroll) {
			try { top = !win.frameElement; } catch(e) { }
			if (top) {
				poll();
			}
		}
		doc[add](pre + 'DOMContentLoaded', init, false);
		doc[add](pre + 'readystatechange', init, false);
		win[add](pre + 'load', init, false);
	}
})(window, function () { // DOMContentLoaded here

	// cache

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

	// TODO: Detect URL and route accordingly
	// TODO: Register event handlers for routing
	// TODO: Take over inline links for routing
});