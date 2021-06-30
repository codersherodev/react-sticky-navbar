import React from 'react'
import useSticky from "./../../customHooks/useSticky"


export default function NavBar() {
    const sticky = useSticky(10)
   
    return (
        <header className={`header__navbar ${sticky?"sticky":""}`}>
            <div className="navbar">
                <h1 className="navbar__logo"><a href="/">NAVBAR</a></h1>
                <ul className="navbar__links">
                <li><a href="/">Home</a></li>
                <li><a href="https://github.com/munshiprodip">Github</a></li>
                <li><a href="/">Pen Collection</a></li>
                </ul>
            </div>
        </header>
    )
}
