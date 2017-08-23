module.exports = {
    crearPizza: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        var nuevoPizza = {
            nombrePizza: parametros.nombrePizza,
            ingredientes: parametros.ingredientes,
            precio: parametros.precio,
            imagenPizza: parametros.imagenPizza
        };
        Pizza.create(nuevoPizza)
            .exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.redirect("/");
            }
        });
    },
    listarPizza: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        Pizza
            .find()
            .exec(function (err, pizza) {
            if (err)
                return res.negotiate(err);
            else {
                return res.view('SolicitudPizza', {
                    pizza: pizza
                });
            }
        });
    }
};
