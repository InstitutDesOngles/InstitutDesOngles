function getMapOptions(){
	var mapLatlngCenter = new google.maps.LatLng(43.57887011056806,1.4804567098617527);
	if ($( window ).width() < 600){
		return  {
			zoom: 13,
			center: mapLatlngCenter,
			dragable:false,
			disableDoubleClickZoom:true
		};
	}else{
		return {
			zoom: 12,
			center: mapLatlngCenter
		};
	}
}
function initializeMap() {
	var idoLatlng = new google.maps.LatLng(43.5376579,1.533350100000007);
	var contentString = '<div style="width:150px;height=50px;text-align:left;">'+
	'<div style="color:#441E20;font-weight:bold;font-size:16px;">Institut des Ongles</div>'+
	'<div>7 Ter Chemin du Tricou</div><div>31670 Labège</div><div>06 36 36 30 27</div></div>';
	var map = new google.maps.Map(document.getElementById('map-canvas'), getMapOptions());
	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 200
	});
	var marker = new google.maps.Marker({
		position: idoLatlng,
		map: map,
		title: 'Insitut des Ongles'
	});
	infowindow.open(map,marker);
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}
google.maps.event.addDomListener(window, 'load', initializeMap);