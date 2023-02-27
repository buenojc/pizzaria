const registraRequisicao = (req, res, next) => {
  const { ip, url } = req;
  const data = new Date().toISOString();
  console.log(`${ip} - ${data} - ${url}`);

  next();
};

module.exports = registraRequisicao;
