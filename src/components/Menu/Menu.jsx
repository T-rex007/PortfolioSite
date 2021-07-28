import React from 'react'
import "./menu.scss"
function Menu({menuOpen, setMenuOpen}) {
    return (
      <div className={"menu " + (menuOpen && "active")}>
        <ul>
          <li>
            <a href="#intro" onClick={() => setMenuOpen(!menuOpen)}>
              Home
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setMenuOpen(!menuOpen)}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#works" onClick={() => setMenuOpen(!menuOpen)}>
              Work
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setMenuOpen(!menuOpen)}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contacts" onClick={() => setMenuOpen(!menuOpen)}>
              Contacts
            </a>
          </li>
        </ul>
      </div>
    );
}

export default Menu
