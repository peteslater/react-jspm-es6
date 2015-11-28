'use strict';

let System = require('jspm').Loader();

System.import('./src/server/server').catch(function(err) {
	console.log(err);
});
