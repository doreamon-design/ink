const dotenv = require('@znode/dotenv');

// load dotenv
dotenv.load();

module.exports =  {
	BASE_URL: '',
	mongoose: {
		url: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
		options: {
			// auth: { authSource: "admin" },
			user: process.env.DB_USER,
			pass: process.env.DB_PASS,
		}
	}
}
