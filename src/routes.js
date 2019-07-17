import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Lista from './pages/Lista';
import GoogleMaps from './pages/GoogleMaps';

function Routes() {
   return (
      <Switch>
         <Route path="/" exact component={Cadastro} />
         <Route path="/lista" component={Lista} />
         <Route path="/google" component={GoogleMaps} />
      </Switch>
   )
}

export default Routes;