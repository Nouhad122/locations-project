import React, { useRef, useEffect } from 'react';
import 'ol/ol.css';
import { Map as OlMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Icon } from 'ol/style';
import classes from './Map.module.css';

const Map = props => {
  const mapRef = useRef();
  const { center, zoom } = props;

  useEffect(() => {
    // Convert coordinates from {lat, lng} format to [lng, lat] format for OpenLayers
    const coordinates = [center.lng, center.lat];
    
    // Create a marker feature at the center coordinates
    const markerFeature = new Feature({
      geometry: new Point(fromLonLat(coordinates))
    });

    // Style the marker
    markerFeature.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: 'https://openlayers.org/en/latest/examples/data/icon.png',
          scale: 0.5
        })
      })
    );

    // Create vector source and layer for the marker
    const vectorSource = new VectorSource({
      features: [markerFeature]
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource
    });

    // Initialize the map
    const map = new OlMap({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat(coordinates),
        zoom: zoom
      })
    });

    // Cleanup function
    return () => {
      map.setTarget(null);
    };
  }, [center, zoom]);

  return (
    <div className={classes['map-container']}>
      <div ref={mapRef} className={classes.map}></div>
    </div>
  );
};

export default Map;
