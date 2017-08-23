/**
 * Created by DELL_PC on 14/8/2017.
 */
declare var module;
declare var sails;
declare var Pizza;
module.exports = {

  crearPizza:(req,res)=>{

    let parametros = req.allParams();

    sails.log.info("Parametros",parametros);
    let nuevoPizza = {
      nombrePizza:parametros.nombrePizza,
      ingredientes:parametros.ingredientes,
      precio:parametros.precio
    };
    Pizza.create(nuevoPizza)
      .exec(
        (error,usuarioCreado)=>{
          if(error){
            return res.serverError(error);
          }else{

            return res.redirect("/");

          }
        }
      )



  },
  listarPizza:(req,res)=> {

    let parametros = req.allParams();

    sails.log.info("Parametros", parametros);
    Pizza
      .find()
      .exec((err, pizza) => {
        if (err) return res.negotiate(err);
        else {
          return res.view('SolicitudPizza', {
            pizza: pizza
          });
        }

      });
  }


};

