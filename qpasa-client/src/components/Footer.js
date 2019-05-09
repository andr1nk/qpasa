import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer className="my-5 pt-5 text-muted text-center text-small">
                <p className="mb-1">©2019 Q'pasa</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a>Privacy</a>
                    </li>
                    <li className="list-inline-item">
                        <a>About</a>
                    </li>
                    <li className="list-inline-item">
                        <a>Support</a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer
