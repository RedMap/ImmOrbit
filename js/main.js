// panel slider
$(document).ready(function(){												

       //Navigation Menu Slider
        $('#nav-expander').on('click',function(e){
      		e.preventDefault();
      		$('body').toggleClass('nav-expanded');
      	});
      	$('#nav-close').on('click',function(e){
      		e.preventDefault();
      		$('body').removeClass('nav-expanded');
      	});

      	// Initialize navgoco with default options
        $(".main-menu").navgoco({
            caret: '<span class="caret"></span>',
            accordion: false,
            openClass: 'open',
            save: true,
            cookie: {
                name: 'navgoco',
                expires: false,
                path: '/'
            },
            slide: {
                duration: 300,
                easing: 'swing'
            }
        });

      });
      
//panel slider end

//google maps modal
$("#map_modal").modal({
    show: false
}).on("shown", function()
{
    var map_options = {
        center: new google.maps.LatLng(-6.21, 106.84),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), map_options);

    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-6, 106.6),
        new google.maps.LatLng(-6.3, 107)
    );

    var input = document.getElementById("keyword");
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo("bounds", map);

    var marker = new google.maps.Marker({map: map});

    google.maps.event.addListener(autocomplete, "place_changed", function()
    {
        var place = autocomplete.getPlace();

        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(15);
        }

        marker.setPosition(place.geometry.location);
    });

    google.maps.event.addListener(map, "click", function(event)
    {
        marker.setPosition(event.latLng);
    });
});

$("#map_modal").modal('show');

//google maps modal END