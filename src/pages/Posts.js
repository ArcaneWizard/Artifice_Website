import React, { Component } from 'react'
import styled from 'styled-components'
import Image from '../components/Image'

import Menu from './../images/Menu.PNG'
import Gameplay from './../images/Gameplay.PNG'
import Level_2 from './../images/Level_2.png'
import Level_3 from './../images/Level_3.png'

export default class Posts extends Component {
    render() {        
        return (
            <StyledDiv>
                <div className="container-fluid">
                    <div className="row">
                        <div className="summary col-md-12 col-sm-12 ">
                            <p> The Raged Knight is an action-packed bow tower defense game currently under development</p>
                            <p> Here you can check out weekly screenshots and updates.</p>
                        </div>
                        <Image src={Menu} caption={"Main Menu"} /> 
                        <Image src={Gameplay} caption={"Level 1 map"}/> 
                        <Image src={Level_2} caption={"Level 2 map"}/> 
                        <Image src={Level_3} caption={"Level 3 map"}/> 
                    </div>
                </div>
            </StyledDiv>
        )
    }
}

const StyledDiv = styled.header` {
    p {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-color: var(--whites);
        font-size: 1.5em;
        padding: 0.2em 0em;
    }

    .row {
        margin-bottom: 10%;
    }

    @media screen and (max-width: 700px) {
       p {
           font-size: 1em;
       }
    }

    @media screen and (min-width: 700px) {
       p {
           font-size: 1.5em;
       }
    }
    
    .content {
        padding: 4em 5em;
    }

    .summary {
        color: var(--whites);
        padding: 4em 1.2em 1em 1.2em;
        text-align: center;
    }
}`;
