import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// return props.locations.map((location, i) => {
  //   return (
  //     <AnyReactComponent
  //       lat={location.lat}
  //       lng={location.coordinates}
  //       text={location.text}
      // />
    // );
  // });