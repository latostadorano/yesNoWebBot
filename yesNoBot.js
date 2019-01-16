// Array de posibles respuestas: Yes or No; Tenemos que agregar más respuestas de cada opción
// Creamos una variable en la que abrá dos resultados: 0=Yes; 1=No

/* TAREAS: 
  - Crear en el canvas la respuesta de Yes or No con paragraph
*/

var yesorno = ["Yes", "No"];
var yesText = ["For sure", "Definetly", "Fuck yeah!", "Affirmative", "Sounds good!", "A huevo!"];
var noText = ["Under no circumstances", "Not likely", "Thumbs down", "Nope", "Nel compa"];

var api = "http://api.giphy.com/v1/gifs/random?";
var apiKey = "&api_key=oItqUmCXwyEWJrS34WHmC9cWuvtckyRQ";
var query = "&tag="; // tag = palabra clave, g = rating

var rating = "&g=1"

function setup() {
  var input = select('#question');
  input.changed(ask);
  var button = select('#submit');
  button.mousePressed(ask);
}

function ask() {
  indexYesorno = floor(random(0, 2));
  var tag = yesorno[indexYesorno];

  indexYes = floor(random(yesText.length));
  var yesParagraph = yesText[indexYes];

  indexNo = floor(random(noText.length));
  var noParagraph = noText[indexNo];

  var url = api + apiKey + query + tag + rating;
  loadJSON(url, gotData);

  if (tag == yesorno[0]) {
    print(tag + "! Go for it!");
    createP(yesParagraph);
  }
  if (tag == yesorno[1]) {
    print(tag + ", it doesn't looks good");
    createP(noParagraph);
  }
}

function gotData(giphy) {
  createImg((giphy.data.images.original.url));

}