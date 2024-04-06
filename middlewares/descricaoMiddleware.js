const validateFamilyName = (request, response, next) => {
    const { body } = request;
    if (body.descricao == undefined) {
    return response.status(400)
    .json({ message: 'O campo "descricao" é obrigatório' });
    }
    if (body.descricao === '') {
    return response.status(400)
    .json({ message: 'O campo "descricao" não pode ser vazio' });
    }
    next();
};
module.exports = { validateFamilyName };