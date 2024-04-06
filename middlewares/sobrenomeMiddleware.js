const validateName = (request, response, next) => {
  const { body } = request;
  if (body.nome == undefined) {
  return response.status(400)
  .json({ message: 'O campo "sobrenome" é obrigatório' });
  }
  if (body.nome === '') {
  return response.status(400)
  .json({ message: 'O campo "sobrenome" não pode ser vazio' });
  }
  next();
};
module.exports = { validateName };