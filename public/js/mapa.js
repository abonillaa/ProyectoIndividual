var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 9.933063, lng: -84.079479},
          zoom: 8
        });
      }
// Place a draggable marker on the map
var marker = new google.maps.Marker({
    position: {
        lat: 9.933063, 
        lng: -84.079479
    },
    map: map,
    draggable:true,
    title:"Drag me!"
});