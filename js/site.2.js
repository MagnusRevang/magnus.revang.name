// X Simple selectors
// X Chainable syntax
// Ajax
// X DOMReady
// Caching ([] and LocalStorage)
// History
// DOM Manipulation (insert, addClass, removeClass, toggleClass, hasClass)
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