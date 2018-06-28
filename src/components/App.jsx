import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';


function App() {
  return(
    <div>
      <style jsx>
        {`
          * {
            font-family: 'Open Sans', sans-serif;
            margin:auto;
          }
          `}
      </style>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}



export default App;
