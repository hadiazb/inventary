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
  document.getElementById("botonRegistrar").addEventListener( "click", limpiar, false);
  document.getElementById("botonRegistrar").addEventListener( "click", mostrarTabla, false);
}

function nuevoArticulo(){
  var introNombre       = document.getElementById("txtNombre").value;
  var introColor        = document.getElementById("txtColor").value;
  var introPrecio       = parseFloat(document.getElementById("txtPrecio").value);
  var introUnidades     = parseFloat(document.getElementById("txtUnidades").value);
  var introReferencia   = document.getElementById("txtReferencia").value;
  var introMarca        = document.getElementById("txtMarca").value;
  var introIngreso      = document.getElementById("txtIngreso").value;
  var nuevaPersona = { "nombre"    : introNombre,
                       "color"     : introColor,
                       "precio"    : introPrecio,
                       "unidades"  : introUnidades,
                       "referencia": introReferencia,
                       "marca"     : introMarca,
                       "ingreso"   : introIngreso };
  articulos.push(nuevaPersona);
}
function limpiar() {

  document.getElementById("txtNombre").value      = "";
  document.getElementById("txtColor").value       = "";
  document.getElementById("txtPrecio").value      = "";
  document.getElementById("txtUnidades").value    = "";
  document.getElementById("txtReferencia").value  = "";
  document.getElementById("txtMarca").value       = "";
  document.getElementById("txtIngreso").value     = "";
}

function mostrarTabla(){
  var cuerpoTabla = document.getElementById("data-table");
  var tablaLlena = "";
  tablaLlena = "<tr><td>" + articulos[1].nombre + "</td><td>" + articulos[1].color + "</td><td>" + articulos[1].precio + "</td><td>" + articulos[1].unidades + "</td><td>" + articulos[1].referencia + "</td><td>" + articulos[1].marca + "</td><td>" + articulos[1].ingreso + "</td></tr>" ;
  cuerpoTabla.innerHTML = tablaLlena;
}
