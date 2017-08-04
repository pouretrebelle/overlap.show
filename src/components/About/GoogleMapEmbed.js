import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { GOOGLE_MAPS_CENTER, GOOGLE_MAPS_MARKER, GOOGLE_MAPS_ZOOM, GOOGLE_MAPS_REDIRECT_URL } from '../../constants/googleMaps';
import { ACCENT_COLORS } from '../../constants/ui';

const GoogleMapEmbed = withGoogleMap(() => (
  <GoogleMap
    defaultZoom={GOOGLE_MAPS_ZOOM}
    defaultCenter={GOOGLE_MAPS_CENTER}
    defaultOptions={{
      styles: [
        {
          'featureType': 'all',
          'elementType': 'labels.text.fill',
          'stylers': [{
            'saturation': 36,
          },
          {
            'color': '#120d19',
          },
          ],
        },
        {
          'featureType': 'all',
          'elementType': 'labels.text.stroke',
          'stylers': [{
            'visibility': 'on',
          },
          {
            'color': '#ffffff',
          },
          {
            'lightness': 16,
          },
          ],
        },
        {
          'featureType': 'all',
          'elementType': 'labels.icon',
          'stylers': [{
            'visibility': 'off',
          }],
        },
        {
          'featureType': 'administrative',
          'elementType': 'geometry.fill',
          'stylers': [{
            'color': '#fefefe',
          },
          {
            'lightness': 20,
          },
          ],
        },
        {
          'featureType': 'administrative',
          'elementType': 'geometry.stroke',
          'stylers': [{
            'color': '#fefefe',
          },
          {
            'lightness': 17,
          },
          {
            'weight': 1.2,
          },
          ],
        },
        {
          'featureType': 'landscape',
          'elementType': 'geometry',
          'stylers': [{
            'color': '#efefef',
          }],
        },
        {
          'featureType': 'poi',
          'elementType': 'geometry',
          'stylers': [{
            'color': '#f5f5f5',
          },
          {
            'lightness': 21,
          },
          ],
        },
        {
          'featureType': 'poi.park',
          'elementType': 'geometry',
          'stylers': [{
            'color': '#dedede',
          },
          {
            'lightness': 21,
          },
          ],
        },
        {
          'featureType': 'poi.school',
          'elementType': 'geometry.fill',
          'stylers': [{
            'color': '#ffffff',
          },
          {
            'visibility': 'on',
          },
          ],
        },
        {
          'featureType': 'road.highway',
          'elementType': 'geometry.fill',
          'stylers': [{
            'color': '#7a7a7a',
          },
          {
            'lightness': 50,
          },
          ],
        },
        {
          'featureType': 'road.highway',
          'elementType': 'geometry.stroke',
          'stylers': [{
            'color': '#ffffff',
          },
          {
            'lightness': 55,
          },
          {
            'weight': 0.2,
          },
          ],
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'geometry',
          'stylers': [{
            'color': '#7a7a7a',
          },
          {
            'lightness': 65,
          },
          ],
        },
        {
          'featureType': 'road.local',
          'elementType': 'geometry',
          'stylers': [{
            'color': '#7a7a7a',
          },
          {
            'lightness': 70,
          },
          ],
        },
        {
          'featureType': 'transit.line',
          'elementType': 'geometry',
          'stylers': [{
            'color': '#777777',
          },
          {
            'visibility': 'on',
          }],
        },
        {
          'featureType': 'transit.station',
          'elementType': 'labels',
          'stylers': [{
            'visibility': 'on',
          }],
        },
        {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': [{
            'color': '#ffffff',
          }],
        },
      ],
      panControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      overviewMapControl: false,
    }}
  >
    <Marker
      position={GOOGLE_MAPS_MARKER}
      icon={{
        path: 'M8.5 2.2C7.5.3 5.2-.5 3.3.5S.6 3.8 1.5 5.7c.5.8 2.3 3.1 3.1 4.1.2.3.6.3.8 0 .8-1 2.6-3.3 3.1-4.1.6-1.1.6-2.4 0-3.5zM5 5.6c-.9 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7s1.7.8 1.7 1.7c0 1-.7 1.7-1.7 1.7z',
        fillColor: ACCENT_COLORS[0],
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 4,
        anchor: new window.google.maps.Point(5, 10),
      }}
      onClick={() => {
        window.open(GOOGLE_MAPS_REDIRECT_URL);
      }}
    />
  </GoogleMap>
));

export default GoogleMapEmbed;
