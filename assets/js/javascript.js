window.addEventListener('load', function(){
  var botonRegistrate = document.getElementById('boton-registrate');

  botonRegistrate.addEventListener('click', function(){
    localStorage.setItem("fichaRegistro", JSON.stringify(botonRegistrate));
    window.location="registro.html"

  })
})
