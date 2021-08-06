import React from 'react'

import Button from 'elements/Button'
import BrandIcon from './IconText';
export default function Header(props) {

    //CEK APAKAH LINK SAMA DENGAN PATHNYA. KALAU SAMA MENU NAVBAR NYA DIKASIH CLASSNAME ACTIVE
    const getNavLinkClass = path => {
        return props.location.pathname === path ? "active" : ""
    }

    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon />

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item ${getNavLinkClass("/")}`}>
                                <Button className="nav-link" type="Link" href="/">Home</Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
                                <Button className="nav-link" type="Link" href="/browse-by">Browse By</Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                                <Button className="nav-link" type="Link" href="/stories">Stories</Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                                <Button className="nav-link" type="Link" href="/agents">Agents</Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        </header>
    )
}
