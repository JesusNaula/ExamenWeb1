module.exports = {
    crearPizza: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        var nuevoPizza = {
            nombrePizza: parametros.nombrePizza,
            ingredientes: parametros.ingredientes,
            precio: parametros.precio
        };
        Usuario.create(nuevoPizza)
            .exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.redirect("/");
            }
        });
    }
};
