import React from 'react'
import {HashRouter,BrowserRouter,Route,Switch} from 'react-router-dom'
import Admin from './component/admin/admin.jsx'
import Login from './component/login/login.jsx'

export default  class App extends React.Component {

    render(){
        return (
                <HashRouter>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/admin" component={Admin}></Route>
                    </Switch>
                </HashRouter> 
        )
    }
}