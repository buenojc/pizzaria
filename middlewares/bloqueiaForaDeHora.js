const bloqueiaForaDeHora = (req, res, next) => {
  const hora = new Date().getHours();

  if (hora < 18) {
    res.send("A Pizzaria está fechada, volte entre 19:00h e 00:00h");
  } else {
    next();
  }
};

module.exports = bloqueiaForaDeHora;
