function initMap() {
	var mapDiv = document.getElementById('map');
	var myLocation = {lat: 59.938781, lng: 30.323086};
	var center = {lat: 59.938900, lng: 30.324550};
    var map = new google.maps.Map(mapDiv, {
    	center: center,
        zoom: 17,
		disableDefaultUI: true
    });
	var markerImage = {
		url: "images/pin.png",
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(40, 142)
	};
	var shape = {
		coords: [1,1,79,1,79,139,1,139,1,1],
		type: 'poly'
	}
	var marker = new google.maps.Marker({
		position: myLocation,
		map: map,
		shape: shape,
		icon: markerImage
	});
}

var catalogItems = document.querySelectorAll(".catalog-item");
var i;
for (i = 0; i < catalogItems.length; i++) {
    catalogItems[i].addEventListener("mouseover", function() {
        this.classList.add("catalog-item-zindex");
    });
    catalogItems[i].addEventListener("mouseout", function() {
        this.classList.remove("catalog-item-zindex");
    });
}
 
var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".feedback-window");
var wrap = document.querySelector(".feedback-window-wrap");
var closeBtn = document.querySelector(".svg-icon-close");
var form = document.querySelector(".feedback-form");
var name = null;
var email = null;
var text = null;
if(form){
    name = form.querySelector(".name");
    email = form.querySelector(".email");
    text= form.querySelector(".text");
}
if(link){
link.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("feedback-window-open");
    wrap.classList.add("feedback-window-wrap-open");
});
}
if(closeBtn){
closeBtn.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("feedback-window-open");
    wrap.classList.remove("feedback-window-wrap-open");
});
}
window.addEventListener("keydown", function(event){
    if(event.keyCode == 27 && popup.classList.contains("feedback-window-open")){
        popup.classList.remove("feedback-window-open"); 
        wrap.classList.remove("feedback-window-wrap-open");
    }
});

$('#slider-range').slider({
    range: true,
    min: 0,
    max: 999,
    values: [ 100, 500 ],
    slide: function( event, ui ) {
        $('#min_price').val(ui.values[0]);
        $('#max_price').val(ui.values[1]);
    }
});


var inputs = document.querySelectorAll('.group-input-label input');
for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function(event){
       if(this.value == ""){
           this.classList.add("empty");
       }else{
           this.classList.remove("empty");
       }
    });
    inputs[i].classList.add("empty");
}
var inputs2 = document.querySelectorAll('.group-input-label textarea');
for (i = 0; i < inputs2.length; i++) {
    inputs2[i].addEventListener("keyup", function(event){
       if(this.value == ""){
           this.classList.add("empty");
       }else{
           this.classList.remove("empty");
       }
    });
    inputs2[i].classList.add("empty");
}

var currentPageLink = document.querySelector('.current-page');
if(currentPageLink){
currentPageLink.addEventListener("click", function(event){
   event.preventDefault(); 
});
}