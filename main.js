

import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';
import ZoomSlider from 'ol/control/ZoomSlider';
import {defaults as defaultControls} from 'ol/control';



var socleSelect = document.getElementById("socle-select");
var carre = document.getElementById("carre");
var squareH = "50%";
var squareW="50%";

function changeFunction() {
  var socle = socleSelect.value;
  






if(socle == "socle 1" ){
  squareH="80%";
  squareW="50%";
  
}
else if(socle == "socle 2" ){
  squareH="50%";
  squareW="80%";
}
else if(socle == "socle 3" ){
  
  squareH="60%";
  squareW="70%";
  
}
else {
squareH="80%";
squareW="80%";
}
carre.style.height = squareH;
carre.style.width = squareW;
}


function mapinit() {
 
const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
  controls: defaultControls().extend([new ZoomSlider()]),
});}

mapinit();



socleSelect.onchange = function(){
  changeFunction();
}


var element = document.getElementById("map");



  
function screenShot(){
html2canvas(element).then(function(canvas) {
  
              
            var imgURL = canvas.toDataURL("image/png");
            var image = new Image();
            
            image.src =imgURL;
            //document.body.appendChild(image);

            var doc = new jsPDF();
            doc.setFontSize(40);
            doc.addImage(image, 150, 150, 200, 100, 'JPEG',null,90);
            doc.save("image.pdf");
  

});}


document.getElementById("importer").addEventListener('click', function(){
  alert("fichier importé");
  screenShot();
  


  
  
  
});




