const fs = require('fs');
function probMiddleware(req, res, next) {
	fs.writeFileSync('prob.txt', ' en la pagina ' + req.url);
	next();
}
module.exports = probMiddleware;
