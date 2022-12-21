import React from 'react'
import logo from '../logo.svg'

export default function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
              </ul>
        </div>
      </nav>
    </header>
    
  )
}

