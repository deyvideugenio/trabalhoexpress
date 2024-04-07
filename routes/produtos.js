const express = require('express');
const router = express.Router();

const produtoControllers = require('../controllers/produtoControllers');
const nomeMiddleware = require('../middlewares/nomeMiddlewares');
const descricaoMiddleware = require('../middlewares/descricaoMiddleware');
const precoMiddleware = require('../middlewares/precoMiddleware');
const dataatualizadoMiddleware = require('../middlewares/dataatualizadoMiddleware');
/**/
/* GET produtos listing. */
router.get('/', produtoControllers.findAll);
/* PUT produtos listing. */
router.put('/', produtoControllers.update);
/* POST produtos listing. */
router.post('/', nomeMiddleware.validateName,
descricaoMiddleware.validateFamilyName, precoMiddleware.validatePrice, dataatualizadoMiddleware.validateDate, produtoControllers.save);
/* DELETE produtos listing. */
router.delete('/:id', produtoControllers.remove);

module.exports = router;
