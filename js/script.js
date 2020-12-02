
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.895033518464885, lng: -87.63399272412327},
    zoom: 11,
  });

const favemap = {
  loganSquare: {
    center: {lat: 41.92771741920748, lng: -87.70252134482129},
    population: 2714856,
  },
  Bridgeport: {
    center: {lat: 41.8364, lng: -87.6487},
    population: 8405837,
  },
  RoscoeVil: {
    center: {lat: 41.9454, lng:  -87.6907},
    population: 3857799,
  },
  park: {
    center: {lat: 41.8826, lng: -87.6226},
    population: 603502,
  },
};

  //alert('added');
  
  for (const spot in favemap) {
    //alert('it enters for');
    // Add the circle for this city to the map.
    var cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map: map,
      center: favemap[spot].center,
      radius: 1000,
    });
    
  }
  // Logan square
  var ls = { lat: 41.92771741920748, lng: -87.70252134482129};
  var contentString = "Logan Square is the neighborhood I grew up in.";
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  var marker = new google.maps.Marker({
    position: ls,
    map: map,
    title: "Logan Square",
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
  //grant park 41.8826, lng: -87.6226
  var gp = { lat: 41.8826, lng: -87.6226};
  var contentString2 = "Grant park is one of my favorite place to hangout";
  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
  });
  var marker2 = new google.maps.Marker({
    position: gp,
    map: map,
    title: "Grant Park",
  });
  marker2.addListener("click", () => {
    infowindow2.open(map, marker2);
  });
  //bridgeport 41.8364, lng: -87.6487
  var br = { lat: 41.8364, lng: -87.6487};
  var contentString3 = "Bridgeport is where I currently live";
  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
  });
  var marker3 = new google.maps.Marker({
    position: br,
    map: map,
    title: "Uluru (Ayers Rock)",
  });
  marker3.addListener("click", () => {
    infowindow3.open(map, marker3);
  });
  //roscoeville lat: 41.9454, lng:  -87.6907
  var rv = { lat: 41.9454, lng: -87.6907};
  var contentString4 = "I went to highscool in roscoeville.";
  var infowindow4 = new google.maps.InfoWindow({
    content: contentString4,
  });
  var marker4 = new google.maps.Marker({
    position: rv,
    map: map,
    title: "Uluru (Ayers Rock)",
  });
  marker4.addListener("click", () => {
    infowindow4.open(map, marker4);
  });
  //iit 41.835254467719885, -87.62703046887053
  var iit = { lat: 41.835254467719885, lng: -87.62703046887053};
  var contentString5 = "This is IIT, where we all attend school,and where I am a member of ASA and ACM. I also work at the library on campus.";
  var infowindow5 = new google.maps.InfoWindow({
    content: contentString5,
  });
  var marker5 = new google.maps.Marker({
    position: iit,
    map: map,
    title: "Uluru (Ayers Rock)",
    animation: google.maps.Animation.BOUNCE,
  });
  marker5.addListener("click", () => {
    infowindow5.open(map, marker5);
  });
}

google.maps.event.addDomListener(window, 'load', initMap);

