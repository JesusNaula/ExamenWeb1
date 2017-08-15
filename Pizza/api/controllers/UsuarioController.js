module.exports = {
    crearUsuarioQuemado: function (req, res) {
        // http://localhost:1337/Saludo/crearUsuarioQuemado
        // /Saludo/crearUsuarioQuemado ->RELATIVE PATH
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        var nuevoUsuario = {
            nombreUsuario: parametros.nombreUsuario,
            password: parametros.password,
        };
        Usuario.create(nuevoUsuario)
            .exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.redirect("/");
            }
        });
    },
};
