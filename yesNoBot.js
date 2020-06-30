// Array de posibles respuestas: Yes or No; Tenemos que agregar más respuestas de cada opción
//s Creamos una variable en la que abrá dos resultados: 0=Yes; 1=No

/* TAREAS: 
  - Hacer que los gifs no se acumulen
*/
var img;
var yesorno = ["Yes", "No"];                    // Arrays de respuestas
var yesText = ["Yes","For sure", "Definetly", "Fuck yeah!", "Affirmative", "Sounds good!", "¡A huevo!"];
var noText = ["Nay", "No way", "Negative", "Nope", "Nah", "Not a chance", "Noup"];

var api = "http://api.giphy.com/v1/gifs/random?";
var apiKey = "&api_key=oItqUmCXwyEWJrS34WHmC9cWuvtckyRQ";
var query = "&tag=";                            // tag = palabra clave, g = rating
var rating = "&g=1";

var respuesta;

function setup() {
  clear ();
  var input = select('#question');
  input.changed(ask);
  var button = select('#submit');
  gif = select ('foto');
  respuesta = select ('#h2');
  
}

function ask() {
  indexYesorno = floor(random(0, 2));           // ésto hace el random de la respuesta
  var tag = yesorno[indexYesorno];
  indexYes = floor(random(yesText.length));    // ésto hace el random de texto que aparecerá
  var yesParagraph = yesText[indexYes];
  indexNo = floor(random(noText.length));      // ésto hace el random de texto que aparecerá
  var noParagraph = noText[indexNo];

  var url = api + apiKey + query + tag + rating;
  loadJSON(url, gotData);

  if (tag == yesorno[0]) {
    indexYes = floor(random(yesText.length)); // ésto hace el random de texto que aparecerá
    var yesParagraph = yesText[indexYes];
    respuesta.html(yesParagraph);
  } else if (tag == yesorno[1]) {
    indexNo = floor(random(noText.length)); // ésto hace el random de texto que aparecerá
    var noParagraph = noText[indexNo];
    respuesta.html(noParagraph);
  }
}

function gotData(giphy) {
  document.getElementById("foto").src = (giphy.data.images.original.url);

}
