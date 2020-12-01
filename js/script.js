$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
  });
});

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
  
}
google.maps.event.addDomListener(window, 'load', initMap);

/*
function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.835117, -87.627130);
	var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		icon: 'iit-icon.png'
	});

	var contentString = '<h1>IIT Perlstein Hall</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate odit optio, voluptatem placeat odio dignissimos illo magnam esse asperiores voluptas at iure vero eum, nemo aperiam? Ipsam, atque nobis rem.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});


}

google.maps.event.addDomListener(window, 'load', init);
*/