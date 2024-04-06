const express = require('express');
const router = express.Router();

const produtoControllers = require('../controllers/produtoControllers');
const nomeMiddleware = require('../middlewares/nomeMiddlewares');
/* const descricaoMiddleware = require('../middlewares/descricaoMiddlewares'); */

/* GET produtos listing. */
router.get('/', produtoControllers.findAll);
/* PUT produtos listing. */
router.put('/', produtoControllers.update);
/* POST produtos listing. */
router.post('/', nomeMiddleware.validateName, produtoControllers.save);
/* DELETE produtos listing. */
router.delete('/:id', produtoControllers.remove);

module.exports = router;
