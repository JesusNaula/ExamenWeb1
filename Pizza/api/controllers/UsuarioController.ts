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
  login: (req, res) => {


    var parametros = req.allParams();
    if(parametros.nombreUsuario&&parametros.password){
      Usuario.findOne({nombreUsuario:parametros.nombreUsuario})
        .exec((err, usuarioEncontrado) => {
          if (err)return res.negotiate(err,);
          if (!usuarioEncontrado) {
            return res.serverError('El usuario no existe')
          }
          else{

            if(parametros.password==usuarioEncontrado.password){
              console.log("Estas logeado");
              return res.ok('Estas logeado, aqui iria las paginas del administrador');
            }else{
              return res.serverError("Password Incorrecta")
            }

          }

        });
    }
    else{
      sails.log('Usuario eliminado');
      return res.view('/SolicitudPizza');

    }
  },


};

