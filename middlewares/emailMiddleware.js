const validateEmail = (request, response, next) => {
  const { body } = request;
  if (body.email == undefined) {
      return response.status(400)
          .json({ message: 'O campo "email" é obrigatório' });
  }
  if (body.email === '') {
      return response.status(400)
          .json({ message: 'O campo "email" não pode ser vazio' });
  }
  // Aqui você pode adicionar sua própria validação de e-mail, por exemplo:
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(body.email)) {
      return response.status(400)
          .json({ message: 'O campo "email" deve ser um endereço de e-mail válido' });
  }
  next();
};

module.exports = { validateEmail };
