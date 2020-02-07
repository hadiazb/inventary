window.onload = cargarEventos;
var articulos = [
  {
    "nombre"     : null,
    "color"      : null,
    "precio"     : null,
    "unidades"   : null,
    "referencia" : null,
    "marca"      : null,
    "ingreso"    : null
  }
]

function cargarEventos(){
  document.getElementById("botonRegistrar").addEventListener( "click", nuevoArticulo, false);
}

function nuevoArticulo(){
  var introNombre = document.getElementById("txtNombre").value;
  var introEdad   = parseFloat(document.getElementById("txtEdad").value);
  var nuevaPersona = { "nombre": introNombre, "edad": introEdad };
  tabla.push(nuevaPersona);
}
