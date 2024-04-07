const validatePrice = (request, response, next) => {
  const { body } = request;
  if (body.preco == undefined || body.preco === '') {
    return response.status(400)
      .json({ message: 'O campo "preco" é obrigatório' });
  }
  if (isNaN(parseFloat(body.preco)) || parseFloat(body.preco) <= 0) {
    return response.status(400)
      .json({ message: 'O campo "preco" deve ser um número positivo' });
  }
  next();
};

module.exports = { validatePrice };
