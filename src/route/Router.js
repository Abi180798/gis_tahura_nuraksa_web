import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import DashboardUser from '../app/dashboard/dashboarduser/DashboardUser'
import Login from '../app/auth/Login'
import TahuraMaps from '../app/maps/TahuraMaps'
import DashboardAdmin from '../app/dashboard/dashboardadmin/DashboardAdmin'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><DashboardUser /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/peta"><TahuraMaps /></Route>
        <Route exact path="/dashboardadmin"><DashboardAdmin /></Route>
        {/* <Route exact path="/dashboardadmin/wisata"><DashboardAdmin/></Route> */}
      </Switch>
    </BrowserRouter>
  )
}
export default Router