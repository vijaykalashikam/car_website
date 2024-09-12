import React , { useState , useEffect , useRef  } from 'react'


import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps'


function Location() {
  const [
    mapLongitude,
    setMapLongitude
  ] = useState(77.00000000);
  
  const [
    mapLatitude,
    setMapLatitude
  ] = useState(20.00000000);
  
  const [
    mapZoom,
    setMapZoom
  ] = useState(13);
  
  const [
    map,
    setMap
  ] = useState({});
  // const increaseZoom = () => {
  //   if (mapZoom < MAX_ZOOM) {
  //     setMapZoom(mapZoom + 1);
  //   }
  // };
  
  // const decreaseZoom = () => {
  //   if (mapZoom > 1) {
  //     setMapZoom(mapZoom - 1);
  //   }
  // };
  
  const updateMap = () => {
    map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    map.setZoom(mapZoom);
  };
  
  
  
  useEffect(() => {
    let my_apikey = 'DRG5iylmFuxlzDEF7UEeaChMy45Nieak';
    let map = tt.map({
      key: "my_apikey",
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
  
    setMap(map);
  
    return () => map.remove();
  }, []);
  
  
  const mapElement = useRef(
  
  );
  return (
    <>
    <input  type="text" name="longitude"
    value={mapLongitude}
    onChange={(e) => setMapLongitude(e.target.value)}
  />
  
  <div ref={mapElement} className="mapDiv"></div>
  </>
  )
}

export default Location