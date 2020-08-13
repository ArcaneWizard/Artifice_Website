import React, { Component } from 'react'
import styled from 'styled-components'
import Image from '../components/Image'

import Menu from './../images/Menu.PNG'
import Gameplay from './../images/Gameplay.PNG'

class Posts extends Component {
    render() {        
        return (
            <StyledDiv>
                <div className="container-fluid">
                    <div className="row">
                        <div className="summary col-md-12 col-sm-12 ">
                            <p> The Raged Knight is an action-paced bow tower defense game currently under development</p>
                            <p> Here you can check out weekly screenshots and updates.</p>
                        </div>
                        <Image src={Menu} caption={"Main Menu on 8-9"} /> 
                        <Image src={Gameplay} caption={"Level 1 Snapshot on 8-9"}/> 
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
    }
    
    .content {
        padding: 4em 5em;
    }

    .summary {
        color: var(--whites);
        padding: 4em 4em 1em 4em;
        text-align: center;
    }

    .row {
    }
}`;

export default Posts;
