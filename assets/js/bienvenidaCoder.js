window.onload=function(){
  var nombre=document.getElementById('registroNombre');
  var apellido=document.getElementById('registroApellido');
  var correo = document.getElementById('registroCorreo');
  var password = document.getElementById('registroPassword');

  var usuario= JSON.parse(localStorage.getItem("bienvenidaCoder"));

  nombre.innerHTML= usuario.nombre;
  apellido.innerHTML= usuario.apellido;
  correo.innerHTML= usuario.correo;
  password.innerHTML= usuario.password;
}

/*
var botonEditar= document.getElementById('buttonEditar');
botonEditar.addEventListener("click", function({
  localStorage.setItem("editarDatos",JSON.stringify(botonEditar);
  window.location="registro.html";
}))
*/
