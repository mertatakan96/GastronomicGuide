import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Button } from "semantic-ui-react";
import { Message } from "semantic-ui-react";

export default function RestaurantMap({ restaurant }) {
  const containerStyle = {
    width: "100%",
    height: "50vh",
  };

  const center = {
    lat: restaurant.latitude,
    lng: restaurant.longitude,
  };

  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [showDirections, setShowDirections] = useState(false);
  const [directions, setDirections] = useState(null);

  const handleMarkerClick = () => {
    setInfoWindowOpen(true);
  };

  const handleInfoWindowClose = () => {
    setInfoWindowOpen(false);
  };

  const handleGoClick = () => {
    setInfoWindowOpen(false);
    setShowDirections(true);

    // Calculate the route between the user's location and the restaurant
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
          {
            origin: userLocation,
            destination: center,
            travelMode: "DRIVING",
          },
          (result, status) => {
            if (status === "OK") {
              setDirections(result);
            }
          }
        );
      });
    }
  };

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} onClick={handleMarkerClick} />
        {infoWindowOpen && (
          <InfoWindow position={center} onCloseClick={handleInfoWindowClose}>
            <div>
              <div>
                <Message>
                  <Message.Header>{restaurant.name}</Message.Header>
                  <div style={{ marginTop: "10px" }}>
                    <button class="ui button" onClick={handleGoClick}>
                      Go
                    </button>
                  </div>
                </Message>
              </div>
            </div>
          </InfoWindow>
        )}
        {showDirections && directions && (
          <DirectionsRenderer directions={directions} />
        )}
      </GoogleMap>
    </LoadScript>
  );
}
