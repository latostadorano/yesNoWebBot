// Random yes no gif generator
// We're working with Giphy's API.
// User asks a question and the program will return a yesGif or a noGif and text.

var yesorno = ["Yes", "No"];                                                                                 //Array of multiple answears
var yesText = ["For sure", "Definetly", "Fuck yeah!", "Affirmative", "Sounds good!", "A huevo!"];            //Array of multiple options for text
var noText = ["Under no circumstances", "Not likely", "Thumbs down", "Nope", "Nel compa", "Fuck no"];        //Array of multiple options for text

var api = "http://api.giphy.com/v1/gifs/random?";
var apiKey = "#####";
var query = "&tag=";                           // tag = keyWord (in this case: Yes or No)

function setup() {
  var input = select('#question');
  input.changed(ask);
  var button = select('#submit');
  //button.mousePressed(ask);                  If we activate this line we'll get a double answear and we don't want that
}

function ask() {
  indexYesorno = floor(random(0, 2));           // Yes or no
  var tag = yesorno[indexYesorno];

  indexYes = floor(random(yesText.length));     // Random Yes text
  var yesParagraph = yesText[indexYes];

  indexNo = floor(random(noText.length));       //  Random No text
  var noParagraph = noText[indexNo];

  var url = api + apiKey + query + tag;         //  Getting gif link from the Giphy API
  loadJSON(url, gotData);

  if (tag == yesorno[0]) {
    createP(yesParagraph);
    print(tag);
  }
  if (tag == yesorno[1]) {
    createP(noParagraph);
    print(tag);
  }
}

function gotData(giphy) {                         //  Create gif function
  createImg((giphy.data.images.original.url));
}
