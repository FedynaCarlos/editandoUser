var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
/* GET users listing. */
/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});
///agregado por mi
router.get('/register', userController.register);
router.post('/register', userController.create);
router.get('/list', userController.list);
router.get('/search', userController.search);
router.get('/edit/:idUser', userController.edit);
router.put('/edit', function(req, res) {
	res.send('hola fui por put');
});
router.delete('/delete/:idUser', function(req, res) {
	res.send('soy delete');
});

module.exports = router;
