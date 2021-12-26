

import './App.css';


import {Switch, Route, Redirect} from 'react-router-dom'

import { PrivatRouter, PublicRouter ,DashboardRouter} from './router/router';
import { useSelector } from 'react-redux';


function App() {
    // let auth=useSelector(state=>state.user.currentUser)

    // const isAdmin =  auth? auth.isAdmin : false
    
    // auth = auth? true : false


    const auth = true
    const isAdmin = true

    console.log('admin',isAdmin)


  return (
      <Switch>
      
        {auth?
                (isAdmin? 
                
                    DashboardRouter.map(route=> (
                      
                      <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>
                    
                    ))
                  :
              
                    PrivatRouter.map(route=>(
                          
                        <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>
                      ))
                )
            
        
          :PublicRouter.map(route=>(

              <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>
            ))

            
        }

       { console.log("auth",auth)}
        {auth
        ?<Redirect to='/'/>
          :<Redirect to='/login'/>
        }
     
      </Switch>
  );
}

export default App;
