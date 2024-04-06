const validateDate = (request, response, next) => {
  const { body } = request;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (body.data == undefined || body.data === '') {
    return response.status(400)
      .json({ message: 'O campo "data" é obrigatório' });
  }
  
  if (!dateRegex.test(body.data)) {
    return response.status(400)
      .json({ message: 'O campo "data" deve estar no formato "YYYY-MM-DD"' });
  }

  const parts = body.data.split('-');
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);

  const isValidDate = !isNaN(year) && !isNaN(month) && !isNaN(day) &&
    month >= 1 && month <= 12 && day >= 1 && day <= new Date(year, month, 0).getDate();

  if (!isValidDate) {
    return response.status(400)
      .json({ message: 'A data fornecida não é uma data válida' });
  }

  next();
};

module.exports = { validateDate };
