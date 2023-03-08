const verificaSeLogado = (req, res, next) => {
    if(!req.session.admLogado){
        return res.redirect('/adm/login')
    }

    next()
}

module.exports = verificaSeLogado