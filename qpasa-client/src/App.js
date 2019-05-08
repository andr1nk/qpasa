import React from 'react'
import './App.css'
import Event from './components/Event'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Event />
            <Footer />
        </div>
    )
}

export default App
