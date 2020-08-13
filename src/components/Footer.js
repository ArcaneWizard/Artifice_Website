import React from 'react'
import styled from 'styled-components';

export default function Footer() {
    return (
        <CSS>
            <div className="main-footer">
                <div className="footer-middle">
                    <div className="container">
                        <div className="footer-bottom">
                            <p className="text-sx-left">
                                &copy; {new Date().getFullYear()} Rage Knight - All Rights
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </CSS>
    )
}

const CSS = styled.div` {
.main-footer {
    margin-top: 2em;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
 }
 
 .footer-middle {
   background: var(--darkPurples);
   color: var(--whites);
   font-weight: 430;
   text-align: center;
 }
 
 .footer-bottom {
   padding: 2em 0em 1em 0em;
   text-align: center;
 }
 
 .text-sx-left {
   font-size: 1.2em;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 }
}`;