const validateDate = (request, response, next) => {
  const { body } = request;
  const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;

  if (body.data_atualizado == undefined || body.data_atualizado === '') {
    return response.status(400)
      .json({ message: 'O campo "data_atualizado" é obrigatório' });
  }
  
  if (!dateRegex.test(body.data_atualizado)) {
    return response.status(400)
      .json({ message: 'O campo "data_atualizado" deve estar no formato "YYYY-MM-DDTHH:MM:SS.MMMZ"' });
  }

  const date = new Date(body.data_atualizado);

  if (isNaN(date.getTime())) {
    return response.status(400)
      .json({ message: 'A data fornecida não é uma data válida' });
  }

  next();
};

module.exports = { validateDate }
