
// Create a Model with basic infomration


var Model = {
  locations:[
          {
              title: 'Texas State Capital Building',
              name : 'Texas State Capital Building',
              imgSrc : 'img/texascapbld.jpg',
              imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjn3tXaq4_PAhUE4CYKHTTQCTQQjRwIBw&url=http%3A%2F%2Fphotohome.com%2Fphotos%2Ftexas-pictures%2Faustin%2Ftexas-state-capitol-3.html&psig=AFQjCNHdyS1c-RFdW_pEybrMTGaVwu7-eA&ust=1473958631380664',
              location: {lat: 30.2746652, lng: -97.7425392},
              foursquare_id: '49bd2c3af964a52052541fe3'
          },
          {
              title: 'Stevie Ray Vaughan Statue',
              name : 'Stevie Ray Vaughan Statue',
              imgSrc : 'img/srvstatue.jpg',
              imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiBs5joq4_PAhWKdSYKHYmPA3EQjRwIBw&url=http%3A%2F%2Fwww.texasstandard.org%2Fstories%2Fdallas-citizens-raise-money-for-a-stevie-ray-vaughn-statue%2F&psig=AFQjCNHFESDyaYA3vrEELjNaR38-G5cjEQ&ust=1473958606313606',
              location: {lat: 30.2628386, lng: -97.7506877},
              foursquare_id: '4b79ad6ef964a520670a2fe3'
          },
          {
              title: 'Easy Tiger',
              name : 'Easy Tiger',
              imgSrc : 'img/6thstreet.jpg',
              imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjutpGFrI_PAhXI6iYKHXaAAOIQjRwIBw&url=http%3A%2F%2Fwww.doudout.com%2F6th%2F6th-street-austin-tx-map&psig=AFQjCNHovCq2oTJSfEsWdfKJ_imPa3Tr-A&ust=1473958329889876',
              location: {lat: 30.26588, lng: -97.735678},
              foursquare_id: '4d6e81901c1041bd009d5d28'
          },
          {
              title: 'Darrell K. Royal Stadium',
              name : 'Darrell K. Royal Stadium',
              imgSrc : 'img/drmstadium.jpg',
              imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjZiqCOrI_PAhXDWSYKHQJ2AOAQjRwIBw&url=http%3A%2F%2Fphotos.overaustin.com%2FVideo%2FUTStadium%2Fi-CDcgrhR%2F&psig=AFQjCNEA4Hfay3iSWBEl2ylIeZbw-rT7Nw&ust=1473958358245950',
              location: {lat: 30.2836243, lng: -97.7347289},
              foursquare_id: '4ab50c16f964a5202e7220e3'
          },
          {
              title: 'Amy\'s Ice Creams',
              name : 'Amy\'s Ice Creams',
              imgSrc : 'img/amysicecream.jpg',
              imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwi_-fLphJDPAhWG4CYKHdmpBl0QjRwIBw&url=http%3A%2F%2Fcityseeker.com%2Faustin-tx%2F717629-amy-s-ice-creams-westgate&bvm=bv.132479545,d.cWw&psig=AFQjCNF71SCcDwNWVMHhWYFui2fUmMb7Rw&ust=1473983010474572',
              location: {lat: 30.272028, lng: -97.754441},
              foursquare_id: '4a078354f964a52077731fe3'
          },
          {
              title: 'Midnight Cowboy',
              name : 'Midnight Cowboy',
              imgSrc : 'img/midnight.jpg',
              imgAttribution : 'http://www.shinestudiosaustin.com/images/control-room-new.jpg',
              location: {lat: 30.26709, lng: -97.7399655},
              foursquare_id: '4f5abbc9e4b036906f7718da'
          },
          {
              title: 'Franklin Barbecue',
              name : 'Franklin Barbecue',
              imgSrc : 'img/franklin-barbecue.jpg',
              imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwikgaW7hJDPAhXC5SYKHVXfCO0QjRwIBw&url=https%3A%2F%2Fwww.tripadvisor.com%2FRestaurant_Review-g30196-d1899234-Reviews-Franklin_Barbecue-Austin_Texas.html&psig=AFQjCNGeLOsViPhnsMBs-LGgwFkqoNfZZA&ust=1473982932457685',
              location: {lat: 30.270119, lng: -97.731273},
              foursquare_id: '4d755f73fc766a314d778d1a'
          }
      ],

      styles: [
            {
              featureType: 'water',
              stylers: [
                { color: '#19a0d8' }
              ]
            },{
              featureType: 'administrative',
              elementType: 'labels.text.stroke',
              stylers: [
                { color: '#ffffff' },
                { weight: 6 }
              ]
            },{
              featureType: 'administrative',
              elementType: 'labels.text.fill',
              stylers: [
                { color: '#e85113' }
              ]
            },{
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [
                { color: '#efe9e4' },
                { lightness: -40 }
              ]
            },{
              featureType: 'transit.station',
              stylers: [
                { weight: 9 },
                { hue: '#e85113' }
              ]
            },{
              featureType: 'road.highway',
              elementType: 'labels.icon',
              stylers: [
                { visibility: 'off' }
              ]
            },{
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [
                { lightness: 100 }
              ]
            },{
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [
                { lightness: -100 }
              ]
            },{
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [
                { visibility: 'on' },
                { color: '#f0e4d3' }
              ]
            },{
              featureType: 'road.highway',
              elementType: 'geometry.fill',
              stylers: [
                { color: '#efe9e4' },
                { lightness: -25 }
              ]
            }
          ]

};


// Global Variables
var map,
    mapOptions,
    infowindow,
    bounds,
    geocoder,
    styles;

function initApp(){
  // If gmaps API loads, start our map and apply bindings
  if (typeof google !== 'undefined'){
    initMap();
    ko.applyBindings(new ViewModel());
  } else {
    apiFallback('gmaps');
  }
};

function apiFallback(input){
  if (input === 'gmaps'){
    console.log('gmaps');
    window.alert('gmaps info is not available');
  } else if (input === 'foursquare'){
    console.log('foursquare');
    window.alert('foursquare info is not available');
  }
}



function ViewModel(){

  var self = this;

  self.appName = ko.observable('Visit Austin, Texas!');
  self.locations = ko.observableArray(Model.locations);
  self.searchQuery = ko.observable('');

  // Show infoWindow on list view click
  self.setInfoWindow = function(){
      setInfoWindowContent(this.marker);
      setTheBounceClick(this.marker);
  };
  // Bounce if clicked
  self.setTheBounce = function() {
    setTheBounceClick(this.marker);
  };




// start the filter
  self.search = ko.pureComputed(function(){
    return ko.utils.arrayFilter(self.locations(), function(item){

      // Check if searchQuery matches locations array title
      var match = item.title.toLowerCase().indexOf(self.searchQuery().toLowerCase()) >= 0;

      // eliminate markers not in filter
      item.marker.setVisible(match);

      return match;

    });
  });

};

function initMap() {

    //mapOptions = { mapTypeControl: false };
    map = new google.maps.Map(document.getElementById('map'), {styles: Model.styles});

    infowindow = new google.maps.InfoWindow();
    bounds = new google.maps.LatLngBounds();
    geocoder = new google.maps.Geocoder();

  for (var i = 0; i < Model.locations.length; i++) {

    var data =  Model.locations[i],
        title = data.title,
        imgSrc = data.imgSrc,
        foursquareId = data.foursquare_id,
        position = data.location;


        // Its time to use the foursquare api.  create ajax call
        // and stores in foursquare_data object
        new ajaxCall(foursquareId,i);

    var marker = new google.maps.Marker({
        map: map,
        title: title,
        animation: google.maps.Animation.DROP,
        position: position,
        icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
    });

        // Add properties to the model: marker, infowindow
        data.marker = marker;
        data.infowindow = infowindow;

    // Click marker to open infowindow
    marker.addListener('click', function() {
      setInfoWindowContent(this);
    });
    // Click marker and have the pin bounce
    marker.addListener('click', function() {
      setTheBounceClick(this);
    });
    // Mouseover and mouseout


    marker.addListener('mouseover', function() {
      this.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    });
    marker.addListener('mouseout', function() {
      this.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png');
    });


    bounds.extend(data.marker.position);

  }

    map.fitBounds(bounds);

}; //initMap

function ajaxCall(foursquareId,index){

    // Check for foursquare_id then Run ajax request for the location
    if (foursquareId !== ''){

      var xhr = new XMLHttpRequest();

      var apiBase = 'https://api.foursquare.com/v2/venues/',
          apiClientId = '&client_id=' + '32THWD4Y4TYM0VUCOKCXIDIDSFHZVRCXHKSNJSSKKNIPIKC2',
          apiClientSecret = '&client_secret=' + 'BPMLDBXXH0R0DOGN0LIORPPOGU033UUOP152TFPMEZODNA22',
          apiVersion = '&v=' + 20130815,
          apiVenueId = ''+ foursquareId + '/?' + '',
          apiCall = ''+ apiBase + apiVenueId + apiClientId + apiClientSecret + apiVersion +'';

      xhr.open('GET', apiCall);


      xhr.onload = function() {
          if (xhr.status === 200) {
              var data = JSON.parse(xhr.responseText);
                  data = data.response.venue;

                Model.locations[index].marker.foursquare_data = data;
          }
          else {
          apiFallback('foursquare');
        }
      };

      xhr.onerror = function() {
        apiFallback('foursquare');
        console.log("** Foursquare data has failed to load. Please refresh or try again later");
      };

      xhr.send();

    } else {


    }



};

  function setTheBounceClick(input) {

      if(input.getAnimation() !== null) {
      input.setAnimation(null);
    } else {
      input.setAnimation(google.maps.Animation.BOUNCE);
  // get the pin to sop bouncing after one bounce
      function sansBounce() {
        var noBounce = setTimeout(stopBounce,1410);
        function stopBounce() {
          input.setAnimation(null);
        }
      }

      sansBounce();

      }
  };




function setInfoWindowContent(input){

  var infoWindowTemplate = document.createElement('div'),
      contentList = document.createElement('ul');
      infoWindowTemplate.className = "window-content";

  var markerData = [
    {data: input.title},
    {label: 'Address', data: input.foursquare_data.location.address},
    {label: 'Rating', data: input.foursquare_data.rating},

  ];

  if (input.foursquare_data.hours !== undefined) {
    var newObject = {label: 'Status', data: input.foursquare_data.hours.status};
    markerData.push(newObject);
  }



  function addInfoWindowContent(){

    infoWindowTemplate = '<div class ="window-content"><ul>';

    markerData.forEach(function(item, i){

      var label = item.label,
          data = item.data,
          labelData = '';

        if (data !== undefined){

          if (i == 0){
            labelData = '<h2>' + data + '</h2>';
          } else {
            labelData = '<strong>' + label + '</strong>' + ": " + data;
          }
        }
        infoWindowTemplate += '<li>' + labelData + '</li>';
      });

      infoWindowTemplate += '</ul></div>';

  }; addInfoWindowContent();

    infowindow.setContent(infoWindowTemplate);
    infowindow.open(map, input);
}
