'use strict';

const pg = require('pg');

function testConnection(){
	return new Promise((resolve, reject) => {
		pg.connect(process.env.DATABASE_URL, (err, client) => {
			if(err){
				return reject(err);
			}

			client.query('SELECT 1', (err, result) => {
				if(err){
					return reject(err);
				}

				console.log(result)
				return resolve(result);
			});
		});
	});
}

module.exports = {
	testConnection: testConnection
};
