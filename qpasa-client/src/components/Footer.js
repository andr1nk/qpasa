import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer class="my-5 pt-5 text-muted text-center text-small">
                <p class="mb-1">©2019 Q'pasa</p>
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#">Privacy</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">About</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">Support</a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer
