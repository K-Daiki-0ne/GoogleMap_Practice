import React from 'react';
import { GoogleMap } from 'react-google-maps';

export const Map: React.FC = (): JSX.Element => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 34.7486006, lng: 135.14069369999999 }}
    />
  )
}