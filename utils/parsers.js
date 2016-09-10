'use strict';

const xlsx = require('xlsx');

function getParser(name){
	return new Promise((resolve, reject) => {
		switch(name){
			case 'tourismEuroRevised':
				require(__dirname + '/parsers/tourismEuroRevised.js')()
					.then((res) =>{
						return resolve(res);
					})
					.catch((err) =>{
						return reject(err);
					});
		}
	});
}

module.exports = {
	get: getParser
};