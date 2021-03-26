import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Restaurants from '../components/Restaurants/Restaurants'
import Restaurant from '../components/Restaurant/Restaurant'
import HeaderSearch from './Header/HeaderSearch'
import HeaderLogo from './Header/HeaderLogo'
import Footer from './Footer/Footer'
const App = (props) => {


        return (<div>
                <HeaderLogo />
                <HeaderSearch />
                <br></br>
                <Switch>
                        <Route exact path="/" component={Restaurants} />
                        <Route exact path="/restaurants/:slug" component={Restaurant} />
                </Switch>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Footer />
        </div>

        )
}

export default App