import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Event from './components/Event'

import { Switch, Route } from 'react-router-dom'

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/events-zurich" component={Event} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App
