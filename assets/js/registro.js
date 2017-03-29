window.onload=function(){
  var registro= JSON.parse(localStorage.getItem("fichaRegistro"));
  var botonRegistro=document.getElementById('boton-registro');

  botonRegistro.addEventListener('click', function(){
    var nombre = document.getElementById('registro-nombre').value;
    var apellido = document.getElementById('registro-apellido').value;
    var correo = document.getElementById('registro-correo').value;
    var password = document.getElementById('registro-password').value;
    var formatoCorreo = /\S+@\S+\.\S+/


    function Usuario(nombre, apellido, correo, password){
    this.nombre= nombre;
    this.apellido= apellido;
    this.correo= correo;
    this.password= password;
  }
/*
  var arr = [];
  var nuevoUsuario= new Usuario(nombre, apellido, correo, password)
  arr.push(nuevoUsuario);
  */
  if(nombre!="" && apellido!="" && correo!="" && password!=""){

    if(formatoCorreo.test(correo) != true){
      alert("El correo debe tener un formato valido");
      }
      localStorage.setItem("bienvenidaCoder",JSON.stringify(new Usuario(nombre, apellido, correo, password)));
      window.location="bienvenidaCoder.html";

  }else{
    alert("Todos los campos son obligatorios");
  }

 })
//var usuario= JSON.parse(localStorage.getItem("editarDatos"));



/*var inputs = document.getElementsByClassName('registro');

var camposObligatorios=function(e){
  var espacios = e.keyCode;
  if(nombre!="" && apellido!="" && correo!="" && password!=""){
    this.nextElementSibling.nextElementSibling.innerText="";
    return true;
  }else{
    this.nextElementSibling.nextElementSibling.innerText="Todos los campos son obligatorios";
    return false;
  }
}
*/
