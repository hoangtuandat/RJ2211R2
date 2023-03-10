import React from 'react'
import "./style.css";

 class Header extends React.Component {
  render() {
    return (
        <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    )
  }
}


export default Header;