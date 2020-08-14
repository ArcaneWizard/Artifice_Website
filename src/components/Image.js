import React, { Component } from 'react'
import styled from 'styled-components';

export default class Image extends Component {
    render() {        
        return (
            <StyledDiv className="col-md-6 col-sm-12 col-lg-6">
                <div>
                    <div className="thumbnail">
                        <img src={this.props.src} alt="Screenshot of the game"/>
                            <div className="caption">
                                <h3>{this.props.caption}</h3>
                            </div>
                    </div>
                </div>
            </StyledDiv>
        );
    }
}

const StyledDiv = styled.div` {
    .caption {
        text-align: center;
    }
    .thumbnail {
        text-align: center;
    }

    img {
        width: 100%;
        padding: 3em;
    }

    h3 {
        padding: 0.4em 0em;
        color: var(--whites);
    }

    @media screen and (max-width: 700px) {
        img {
            width: 100%;
            padding: 1.2em;
        }
       h3 {
           padding: 0.1em 0em 1em 0em;
           font-size: 0.9em;
       }
    }

    @media screen and (min-width: 700px) {{
        img {
            width: 100%;
            padding: 3em 3em 2em 3em;
        }

       h3 {
           padding: 0.3em 0em;
           font-size: 1.7em;
       }
    }
}`;
