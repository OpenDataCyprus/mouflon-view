'use strict';

const parsers = require(__dirname + '/parsers');

var db = {};

function getData(name){
	return new Promise((resolve, reject) => {
		if(db[name]){
			return resolve(db[name]);
		}

		parsers
			.get(name)
			.then((res) => {
				db[name] = res;

				return resolve(res)
			})
			.catch((err) => reject(err));
	});
}

module.exports = {
	get: getData
};