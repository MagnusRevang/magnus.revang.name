var LIB = (function () {

	var LIB = function (selector) {
			return new LIB.prototype.init (selector);
		};

	LIB.prototype = {

		init: function (selector) {
			var elm;

			if (selector.nodeType) {
				this[0] = selector;
				this.lenght = 1;
				return this;
			}

			if (typeof selector === "string") {
				elm = Array.prototype.slice.call(document.querySelectorAll (selector));
				this.concat(elm);
				this.length = elm.length;
				return this;
			}

			if (selector && {}.toString.call(selector) === "[object Function]") {
				LIB.rootLIB.ready(selector);
			}

		},

		selector: "",

		length: 0

	};

	// small extend method, doesn't go deep and don't check for selfreference
	LIB.extend = LIB.prototype.extend = function (obj) {

		var target = (arguments.length === 1) ? this : arguments.shift();
		
		arguments.forEach(function (elm) {
			for (var i in elm) {
				target[i] = elm[i];
			}
		});

		return target;

	};

	LIB.extend({

		ready: function (event) {
			// TODECIDE: Move this into the selector code at the top?
			if (document.readyState === "complete") {
				// TODO: call event
			}
			// TODO: This won't work in IE8
			document.addEventListener("DOMContentLoaded", event, false);
		}

	});

	var rootLIB = LIB(document);

	return LIB;

})();

// DOM Plugin
(function (LIB) {

	LIB.prototype.extend({

		hasClass: function (className) {
			return this[0].className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
		},

		addClass: function (className) {
			if (!this.hasClass(className)) {
				this[0].className += " " + className;
			}
			return this;
		},

		removeClass: function (className) {
			// TODO: Do I need to add an addClass check here?
			this[0].className.replace(new RegExp("(\\s|^)" + className + "(\\s|$)")," ");
			return this;
		},

		toggleClass: function (oldClassName, newClassName) {
			return this.removeClass(oldClassName).addClass(newClassName);
		},

		// TODO: Functions for inserting and clearing HTML content

		clear: function () {

		},

		insert: function (html) {

		},

		insertBefore: function (html) {

		},

		insertAfter: function (html) {

		}

	});

})(LIB);


// AJAX Plugin
(function (LIB) {

	LIB.prototype.extend({

		ajax: {}

	});

	LIB.ajax.prototype.extend({

		// really small ajax function that works only in IE7+ and with GET requests
		get: function (url, callbackFunction, useCache) {
				
				if (useCache && LIB.cache && LIB.cache.has(url)) {
					return LIB.cache.get(url, callbackFunction);
				}

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

	});

})(LIB);

// CACHE Plugin
(function (LIB) {

	LIB.prototype.extend({

		// placeholder object
		cache: {}

	});

	// TODO: FIX localStorage/sessionStorage stuff
	// TODO: Use getItem, addItem, removeItem
	LIB.cache.prototype.extend({

		hasLocalStorage: false,

		hasSessionStorage: false,

		store: (this.hasLocalStorage) ? localStorage :
					((this.hasSessionStorage) ? sessionStorage :
						[]),

		get: function (key, callbackFunction) {
			if (!callbackFunction) {
				return JSON.parse(LIB.cache.store[key]);
			}
			callbackFunction(JSON.parse(LIB.cache.store[key]));
		},

		add: function (key, value) {
			LIB.cache.store[key] = JSON.stringify(value);
		},

		remove: function (key) {
			LIB.cache.store[key] = null;
		},

		has: function (key, value) {
			return (LIB.cache.store[key]) ? true : false;
		}

	});

})(LIB);

// HISTORY Plugin
(function (LIB) {

	LIB.prototype.extend({

		// placeholder object
		history: {}

	});

	LIB.history.prototype.extend({

		hasState: (!!(window.history && history.pushState)),

		push: function (state, title, path) {
			if (this.hasState) {
				return window.history.pushState(state, title, path);
			}
			
		}

	});

})(LIB);

// TEMPLATING Plugin
(function (LIB) {

	LIB.prototype.extend({

		// placeholder object
		templating: {}

	});

	LIB.templating.prototype.extend({

	});

})(LIB);

// ROUTING Plugin
(function (LIB) {

	LIB.prototype.extend({

		// placeholder object
		routing: {}

	});

	LIB.routing.prototype.extend({

	});

})(LIB);