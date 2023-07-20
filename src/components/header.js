import { NavLink,Outlet } from "react-router-dom"

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <p className="navbar-brand">DAILY JOURNAL</p>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <div id="home"><NavLink to="/">HOME</NavLink></div>
                        <li id="compose"><NavLink to="/compose">COMPOSE</NavLink></li>
                        <li id="about"><NavLink to="/about">ABOUT</NavLink></li>
                        <li id="contact"><NavLink to="/contact">CONTACT</NavLink></li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}