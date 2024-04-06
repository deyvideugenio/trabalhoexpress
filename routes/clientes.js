const express = require('express');
const router = express.Router();

const clienteControllers = require('../controllers/clienteControllers');
const nomeMiddleware = require('../middlewares/nomeMiddlewares');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');

/* GET clientes listing. */
router.get('/', clienteControllers.findAll);
/* PUT clientes listing. */
router.put('/', clienteControllers.update);
/* POST clientes listing. */
router.post('/', nomeMiddleware.validateName, sobrenomeMiddleware.validateName, idadeMiddleware.validateAge, clienteControllers.save);
/* DELETE clientes listing. */
router.delete('/:id', clienteControllers.remove);

module.exports = router;
