import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

const MapView = () => {
  const mapViewRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer', 'esri/widgets/Search','esri/widgets/Home' ], { css: true })
      .then(([Map, MapView, FeatureLayer, Search, Home]) => {
        const map = new Map({
          basemap: 'topo-vector',
        });

        const view = new MapView({
          container: 'mapDiv',
          map: map,
          // center: [12.972442, 77.580643],
          zoom: 4,
        });

        const layer = new FeatureLayer({
          url:
            'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/origins/FeatureServer/0',
        });

        map.addMany([layer]);
        layerRef.current = layer;

        const searchWidget = new Search({
          view: view,
          sources: [],
        });

        const homeWidget = new Home({
          view: view
        });

        view.ui.add(searchWidget, {
          position: 'top-left',
        });

        view.ui.add(homeWidget, 'top-left');

        mapViewRef.current = view;
      })
      .catch((error) => {
        console.error('Error loading Esri modules:', error);
      });
  }, []);

  return <div id="mapDiv" style={{ height: '100vh', width: '100vw' }} />;
};

export default MapView;