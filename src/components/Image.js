import React, { Component } from 'react'
import styled from 'styled-components';

export default class Image extends Component {
    render() {        
        return (
            <StyledDiv className="col-md-6 col-sm-12 col-lg-6">
                <div>
                    <div className="thumbnail">
                        <img src={this.props.src} alt="..."/>
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
        width: 42em;
        padding: 3em;
    }

    h3 {
        padding: 0.4em 0em;
        color: var(--whites);
    }
}`;
