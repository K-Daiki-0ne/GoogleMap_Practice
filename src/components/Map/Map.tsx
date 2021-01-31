import React, { useState } from 'react'
import { GoogleMap } from 'react-google-maps';

export const Map: React.FC = (): JSX.Element => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 34.748595699999996, lng: 135.14069379999998 }}
    />
  )
};