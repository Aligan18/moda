

import './App.css';


import {Switch, Route, Redirect} from 'react-router-dom'

import { PrivatRouter, PublicRouter } from './router/router';


function App() {
    const auth=true


  return (
      <Switch>
      
        {auth
          ?PrivatRouter.map(route=>(
                
              <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>
            ))
        
          :PublicRouter.map(route=>(

              <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>
            ))
            
        }

        {auth?
          <Redirect to='/'/>
          :<Redirect to='/login'/>
        }
     
      </Switch>
  );
}

export default App;
