import mysql from 'mysql';

class Database {
	static connection (){
		return mysql.createConnection({
			host : 'cottonsheep.com.br',
			user : 'cotton82_admin',
			password : 'Cottonsheep1793*',
			database : 'cotton82_DBOnTheTap',
			multipleStatements: true
		});
	}
}

export default Database;