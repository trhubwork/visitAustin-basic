
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
              title: '6th Street Music District',
              name : '6th Street Music District',
              imgSrc : 'img/6thstreet.jpg',
              imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjutpGFrI_PAhXI6iYKHXaAAOIQjRwIBw&url=http%3A%2F%2Fwww.doudout.com%2F6th%2F6th-street-austin-tx-map&psig=AFQjCNHovCq2oTJSfEsWdfKJ_imPa3Tr-A&ust=1473958329889876',
              location: {lat: 30.274663, lng: -97.7611626},
              foursquare_id: '4bf8b3c65317a5931457007f'
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
              title: 'Shine Studios',
              name : 'Shine Studios',
              imgSrc : 'img/shinestudios.jpg',
              imgAttribution : 'http://www.shinestudiosaustin.com/images/control-room-new.jpg',
              location: {lat: 30.261618, lng: -97.730083},
              foursquare_id: '4e0d1f2552b1b27c1b7a9dfd'
          },
          {
              title: 'Franklin Barbecue',
              name : 'Franklin Barbecue',
              imgSrc : 'img/franklin-barbecue.jpg',
              imgAttribution : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwikgaW7hJDPAhXC5SYKHVXfCO0QjRwIBw&url=https%3A%2F%2Fwww.tripadvisor.com%2FRestaurant_Review-g30196-d1899234-Reviews-Franklin_Barbecue-Austin_Texas.html&psig=AFQjCNGeLOsViPhnsMBs-LGgwFkqoNfZZA&ust=1473982932457685',
              location: {lat: 30.270119, lng: -97.731273},
              foursquare_id: '4d755f73fc766a314d778d1a'
          }
      ]
};

// Global Variables
var map,
    mapOptions,
    infowindow,
    bounds,
    geocoder;

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
  } else if (input === 'foursquare'){
    console.log('foursquare')
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

    mapOptions = { mapTypeControl: false };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

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
        position: position
    });





/*      marker.addListener('click', function() {
        setTheBounceClick(this);
      }); */
        // Add properties to the model: marker, infowindow
        data.marker = marker;
        data.infowindow = infowindow;

    // Click marker to open infowindow
    marker.addListener('click', function() {
      setInfoWindowContent(this);

    });
  /*  marker.addListener('click', function() {

      setTheBounceClick(this);
    }); */




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
      xhr.send();

    } else {
      // do nothing

    }
};

  function setTheBounceClick(input) {
    if(input.getAnimation() !== null) {
      input.setAnimation(null);
    } else {
      input.setAnimation(google.maps.Animation.BOUNCE);
    }
  }; setTheBounceClick();





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

          contentItem = document.createElement('li');
          contentItem.innerHTML = labelData;

          contentList.appendChild(contentItem);
          infoWindowTemplate.appendChild(contentList);
          // put the bounce here?
        } else {
          // do nothing
        }

      });

  }; addInfoWindowContent();

    infowindow.setContent(infoWindowTemplate);
    infowindow.open(map, input);
}
