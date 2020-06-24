import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import DashboardUser from '../app/dashboard/dashboarduser/DashboardUser'
import Login from '../app/auth/Login'
import TahuraMaps from '../app/maps/TahuraMaps'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><DashboardUser /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/peta"><TahuraMaps /></Route>
      </Switch>
    </BrowserRouter>
  )
}
export default Router