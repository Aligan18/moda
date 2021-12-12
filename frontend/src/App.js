

import './App.css';


import {Switch, Route, Redirect} from 'react-router-dom'

import { router } from './router/router';


function App() {
  return (
      <Switch>
      
        {router.map(route=>(

          <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>

        ))}

      <Redirect to='/'/>
        
         
      </Switch>
  );
}

export default App;
