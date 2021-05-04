const sql = require('mssql');

const config = {
	user: 'SA',
	password: 'super_duper_password_69',
	server: 'localhost',
	database: 'eventsdb',
	options: {
		enableArithAbort: true
	}
}

const run = async () => {
	let pool;
	let query = 'select * from events';
	try {
		console.log("Connection Opening...");
		pool = await sql.connect(config);
		
		const result = sql.query(query);
		const eventsJSON = JSON.stringify(result);

		//const { recordset } = await sql.query(query);
		//console.log(recordset);
console.log('***Promise???');
		console.log(eventsJSON);
	} catch(err) {
		console.log(err);
	} finally {
		pool.close();
		console.log('Connection Closed');
	}
}
run();
