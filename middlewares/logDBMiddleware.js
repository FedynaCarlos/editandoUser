const fs = require('fs');
function logDBMiddleware(req, res, next) {
	fs.appendFileSync('logDB.txt', 'se creo un registro en la base de datos' + req.url);
	next();
}
module.exports = logDBMiddleware;
