/*global Typekit: true, LIB: true */

// TODO: Abstract implementation of the REQUIRE logic

// COMPILED TEMPLATES
var templates = {

};

// ROUTING CONFIGURATION
var routes = {
	
};

// Requires Typekit
(function(){var i=0,f=function(){i++;if(!Typekit&&i<5000){setTimeout(f,1);}
	
	try{Typekit.load();}catch(e){}

};f();})();

// Requires LIB
(function(){var i=0,f=function(){i++;if(!LIB&&i<5000){setTimeout(f,1);}

$(function () { // OnDOMLoaded

});

};f();})();