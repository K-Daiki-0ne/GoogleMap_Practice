import { withScriptjs, withGoogleMap } from 'react-google-maps';
import { Map } from './Map/Map';

export const WapperMap = withScriptjs(withGoogleMap(Map));
