import React from 'react'
import './Home.css'

class Home extends React.Component {
    render() {
        return (
            <div>
                <header className="teaser">
                    <p className="teaser-heading">Q'pasa</p>
                </header>
                <div className="container">
                    <p className="description">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </p>
                    <div className="buttons">
                        <button className="btn btn-lg btn-outline-dark button">Berlin</button>
                        <button className="btn btn-lg btn-outline-dark button">Zürich</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
