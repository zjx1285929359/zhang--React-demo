import React from 'react'
import {HashRouter,BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Admin from './pages/admin/admin.jsx'
import Login from './pages/login/login'
import './api'

export default  class App extends React.Component {

    render(){
        return (
                <HashRouter>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/admin" component={Admin}></Route>
                        <Redirect to="/admin"/>
                    </Switch>
                </HashRouter> 
        )
    }
}