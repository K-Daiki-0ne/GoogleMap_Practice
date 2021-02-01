import React from 'react';
import { API_URL } from '../config';
import { WapperMap } from '../components';

function App() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <WapperMap
        googleMapURL={API_URL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `800px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
