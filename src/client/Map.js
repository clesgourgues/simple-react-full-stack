import React from 'react';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import MapIcon from './MapIcon';

class Map extends React.Component {
  componentDidMount() {
    this.map = L.map('map', {
      center: [52.519325, 13.392709],
      zoom: 3.5,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
    const { destinations } = this.props;
    destinations.forEach((d) => {
      const Icon = L.divIcon({
        html: renderToStaticMarkup(<MapIcon name={d.name} />)
      });
      const latLng = L.latLng(d.coordinates.latitude, d.coordinates.longitude);
      console.log(latLng);
      L.marker(latLng, { icon: Icon })
        .addTo(this.map)
        .bindPopup(d.name);
    });
    this.layer = L.layerGroup().addTo(this.map);
    // this.updateMarkers(this.props.markersData);
  }

  /*   componentDidUpdate({ markerPosition }) {
    // check if position has changed
    if (this.props.markerPosition !== markerPosition) {
      this.marker.setLatLng(this.props.markerPosition);
    }
  } */

  /*   updateMarkers(markersData) {
    this.layer.clearLayers();
    markersData.forEach((marker) => {
      L.marker(marker.latLng, { title: marker.title }).addTo(this.layer);
    });
    if (this.props.markersData !== markersData) {
      this.updateMarkers(this.props.markersData);
    }
  } */

  render() {
    return <div id="map" />;
  }
}
export default Map;
