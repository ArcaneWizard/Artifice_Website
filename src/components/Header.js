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
        <Navbar>
            <nav className="navbar navbar-dark navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
    .navbar {
      background-color: var(--darkPurples);
    }

    ul {
        width: 32em;
    }

    a {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.5em;
    }


    }`;
