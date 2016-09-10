'use strict';

const xlsx = require('xlsx');

function getParser(name){
	switch(name){
		case 'TOURISMeurorevisedAugust2016WEB.xlsx':
			require(__dirname + '/parsers/tourismEuroRevised.js')().then((res) => {
				console.log(res);
			});
	}
}

getParser('TOURISMeurorevisedAugust2016WEB.xlsx');

module.exports = {
	get: getParser
};