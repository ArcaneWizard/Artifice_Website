import React, { Component } from 'react'
import styled from 'styled-components'

import lvl_2 from './../videos/lvl_2.mp4'
import lvl_1 from './../images/Level_1.png'
import chaos from './../images/4-diff-enemies.PNG'

export default class Home extends Component {

    render() {
        return (
            <CSS>
                <div className="container-fluid">
                    <div className="imgDiv col-md-12 col-sm-12 col-lg-12">
                        <img src={chaos} />
                    </div>
                    <p>Coming to Android (and likely IOS) devices sometime in 2020</p>
                    <p>Join our mailing list to wishlist the game.</p>
                    <form>
                        <div className="input-group">
                            <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
                            <button onClick={addEmailToDatabase} className="btn btn-primary bg-primary">Join</button>
                        </div>
                    </form>
                    <p id="notification">You'll be notified when the game releases and of 1-2 major updates. No spam, we promise</p>
                </div>
            </CSS>
        )
    }
}

/**/

//post email to the mailing list database
async function addEmailToDatabase(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.toString();

    const posts = {
        email
    }

    fetch("/email", {
        method: 'POST',
        body: JSON.stringify(posts),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => {
        res.json().then(json => {
            document.getElementById("notification").textContent = json;
        })
    }).catch(err => {
        document.getElementById("notification").textContent = "Error. Check your internet connection.";
    })
}


const CSS = styled.header` {

    .container-fluid {
        margin-bottom: 3.4%;
    }

    p {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.5em;
    }
    
    video:focus {
        outline: none;
    }

    @media screen and (max-width: 700px) {
       p {
           font-size: 1em;
       }

       #notification {
        margin-top: 1.2em;
        font-size: 0.8em;
   }

       #email {
        font-size: 0.8em;
       }
       button {
           font-size: 0.8em;
       }

       form {
           display: inline-block;
           width: 26%;
           margin-top: 0.5em;
           min-width: 15em;
       }
    }

    @media screen and (min-width: 700px) {
       p {
           font-size: 1.3em;
       }

       #notification {
            margin-top: 1.5em;
            font-size: 1em;
       }
        
        form {
            display: inline-block;
            width: 26%;
            margin-top: 1.2em;
            min-width: 15em;
        }
    }

    #email {
        display: flex;
        border: 1px solid #ccc; 
        border-radius: 15px 0px 0px 15px;
    }

    .btn {
        border: 1px solid btn-primary; 
        border-radius: 0px 15px 15px 0px;
        margin-left: 0px;
        margin-up: -5px;
    }

    .imgDiv {        
        padding: 2em 0em 2em 0em;
        text-align: center;
    }

    .container-fluid {
        color: var(--whites);
        text-align: center;
        padding-left: 1em;
        padding-right: 1em;
    }

    .input-group {
        text-align: center;
    }

    img {
        width: 90%;
        max-width: 35em;
        border: solid #000;
    }
}`;