function mapInitialize() {
    const styledMapType = new google.maps.StyledMapType(
        [
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
        ],
        { name: "Styled Map" }
    );
    map = new google.maps.Map(document.getElementById("map"), {
        center: mycenter,
        zoom: 15,
        disableDefaultUI: true
    });
    const marker = new google.maps.Marker({
        position: myLatLng,
        map,
        icon: activePin,
    });
    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId("styled_map");
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });
}
