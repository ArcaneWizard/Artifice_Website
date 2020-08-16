import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setLinkAfterRefresh();
    }

    render () {
        return(
        <Navbar className="container-full">
            <nav className="navbar navbar-dark navbar-expand-lg">
                <div className="navbar2" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto container">
                        <li className="nav-item">
                            <Link onClick={e => updateActiveLink(e.target)} ref={ref => this.home = ref} className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={e => updateActiveLink(e.target)} ref={ref => this.posts = ref} className="nav-link" to="/posts">Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={e => updateActiveLink(e.target)} ref={ref => this.requests = ref}className="nav-link" to="/requests">Requests</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Navbar>
        )
    }
}

//when you refresh the tab, still make the correct link go white
function setLinkAfterRefresh()
{
    const links = document.getElementsByClassName("nav-item");

    if (document.location.pathname === "/")
        links[0].classList.add("active");
    else if (document.location.pathname === "/posts")
        links[1].classList.add("active");
    else if (document.location.pathname === "/requests")
            links[2].classList.add("active");
}


//When you go to a diff tab, its link should turn white
function updateActiveLink(e) {
    const links = document.getElementsByClassName("nav-item");

    for (var i = 0; i < links.length; i++)
        links[i].classList.remove("active");

    e.parentElement.classList.add("active");
}

const Navbar = styled.nav` {
    li {
        display: inline-block;
    }

    .navbar-nav {
        display: block;
        text-align: center;
    }

    ul {
        text-align: center;
    }

    .navbar2 {
        background-color: var(--darkPurples);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
    }

    .navbar {
      text-align: center;
      align-items: center;
      display: block;
    }

    a {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    
    @media screen and (max-width: 700px) {
        a {
            font-size: 0.9em;
        }
        .navbar, .navbar2 {
            height: 2.1em;
        }
        li {
            padding: 0em 8%;
            position: relative;
            top: -0.1em;
        }
     }

     @media screen and (min-width: 700px) {
        a {
            font-size: 1.5em;
        }
        .navbar, .navbar2 {
            height: 4em;
        }
        li {
            padding: 0em 10%;
            position: relative;
            top: 0.2em;
        }
      }

    }`;
