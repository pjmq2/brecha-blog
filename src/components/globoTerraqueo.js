import React, { useState } from 'react';
import ReactGlobe from 'react-globe';

const marcadores =  [
  {
    id: 1,
    city: 'Casa de los Siervos en Monterrey',
    color: 'yellow',
    coordinates: [25.645420, -100.290706],
value: 50,
  },
{
  id: 2,
    city: 'Casa Madrigal Quesada',
      color: 'red',
        coordinates: [9.969579, -84.006877],
          value: 50,
  },
  {
    id: 3,
    city: 'Secreto Encontrado',
      color: 'green',
        coordinates: [28.5, 83.9],
          value: 5,
  }
];

function getTooltipContent(marker) {
  return `Lugar: ${marker.city}`;
}

export default function EarthApp(props){
  //const [markers, setMarkers] = useState(marcadores);
  const [details, setDetails] = useState(null);
  function onClickMarker(marker, markerObject, event) {
    setDetails(getTooltipContent(marker));
    if(marker.id===3){
      console.log("HOLA");
    }
  }
  function onDefocus(previousCoordinates, event) {
    setDetails(null);
  }

  return (
    <div style={{ width: '80vw', height: '80vh' }}>
      <ReactGlobe
        initialCoordinates={[0,-100]}
        enableAutoRotate={true}
        markers={marcadores}
        markerOptions={{
          activeScale: 1.1,
          enableTooltip: true,
          enterAnimationDuration: 3000,
          enterEasingFunction: ['Bounce', 'InOut'],
          exitAnimationDuration: 3000,
          exitEasingFunction: ['Cubic', 'Out'],
          getTooltipContent: marker => `${marker.city} (Sales: ${marker.value}.0M)`,
          radiusScaleRange: [0.01, 0.05],
        }}
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />
      {details && (
        <div
          style={{
            background: 'white',
            position: 'absolute',
            fontSize: 20,
            top: 0,
            right: 0,
            padding: 12,
          }}>
          <p>{details}</p>
        </div>
      )}
    </div>
  );
}