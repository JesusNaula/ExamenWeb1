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
    login: function (req, res) {
        var parametros = req.allParams();
        if (parametros.nombreUsuario && parametros.password) {
            Usuario.findOne({ nombreUsuario: parametros.nombreUsuario })
                .exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.negotiate(err);
                if (!usuarioEncontrado) {
                    return res.serverError('El usuario no existe');
                }
                else {
                    if (parametros.password == usuarioEncontrado.password) {
                        console.log("Estas logeado");
                        res.viewe;
                        return res.redirect("/listaPizza");
                    }
                    else {
                        return res.serverError("Password Incorrecta");
                    }
                }
            });
        }
        else {
            sails.log('Usuario eliminado');
            return res.view('/SolicitudPizza');
        }
    },
};
