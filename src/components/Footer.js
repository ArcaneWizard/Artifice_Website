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
                                &copy; {new Date().getFullYear()} Dusk Knight - All Rights
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
   text-align: center;
 }
 
 .text-sx-left {
   font-size: 1.2em;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 }
 
 @media screen and (max-width: 700px) {
    .footer-bottom {
        padding: 0.7em 0em 0em 0em;
    }
      .text-sx-left {
        font-size: 0.9em;
        position: relative;
        bottom: 0.45em;.
      }
      .footer-middle {
          position: relative;
          bottom: -1.08em;
      }
 }

 @media screen and (min-width: 700px) {
    .footer-bottom {
        padding: 1em 0em 0.4em 0em;
      }
}`;