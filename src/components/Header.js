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
                <div className="navbar-collapse" id="navbarSupportedContent">
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

    .navbar {
      background-color: var(--darkPurples);
    }

    ul {
        width: 100%;
    }

    a {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    
    @media screen and (max-width: 700px) {
        a {
            font-size: 0.9em;
        }
        .navbar {
            height: 2.1em;
        }
        li {
            position: relative;
            bottom: 0.6em;
            padding: 0em 8%;
        }
     }

     @media screen and (min-width: 700px) {
        a {
            font-size: 1.5em;
        }
        .navbar {
            height: 4em;
        }
        li {
            padding: 0em 10%;
        }
      }

    }`;
