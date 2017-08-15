/**
 * Created by DELL_PC on 14/8/2017.
 */
declare var module;
declare var sails;
declare var Usuario;
module.exports = {

  crearPizza:(req,res)=>{

    let parametros = req.allParams();

    sails.log.info("Parametros",parametros);
    let nuevoPizza = {
      nombrePizza:parametros.nombrePizza,
      ingredientes:parametros.ingredientes,
      precio:parametros.precio
    };
    Usuario.create(nuevoPizza)
      .exec(
        (error,usuarioCreado)=>{
          if(error){
            return res.serverError(error);
          }else{

            return res.redirect("/");

          }
        }
      )



  }

};

