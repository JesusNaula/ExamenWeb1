/**
 * Created by DELL_PC on 14/8/2017.
 */
declare var module;
declare var sails;
declare var Usuario;
module.exports = {

  crearUsuarioQuemado:(req,res)=>{

    // http://localhost:1337/Saludo/crearUsuarioQuemado
    // /Saludo/crearUsuarioQuemado ->RELATIVE PATH

    let parametros = req.allParams();

    sails.log.info("Parametros",parametros);


    let nuevoUsuario = {
      nombreUsuario:parametros.nombreUsuario,
      password:parametros.password,
    };
    Usuario.create(nuevoUsuario)
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


};

