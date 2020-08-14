import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
// import './bookmark.js';


class PhotoApp2{

    render(){
        const img = "mayo1.jpg";

        const bkmk = document.createElement('bkmk');
        bkmk.src= './photo-app2.js';
        document.body.appendChild(bkmk);
    
    return(
        <div>

        <div>
        <li><a href = "nav-bar.js">NAVBAR</a></li>
    
        </div>

        <div>
        <img src = {img} alt= "Lil' Mayo Profile Pic"></img>
        </div>
        
    
        <div>
            <h1 className = "name2">Lil' Mayo</h1>
        </div>
    
    <div className= "images">

    <img src="mayo2.jpg" alt= "balcony mayo"><button onclick={bkmk}></button></img>
        
    <img src="mayo3.jpg" alt= "desk mayo"><button onclick={bkmk}></button></img>

    <img src="mayo4.jpg" alt= "love mayo"><button onclick={bkmk}></button></img>

    <img src="mayo5.jpg" alt= "guitar mayo"><button onclick={bkmk}></button></img>

    <img src="mayo6.jpg" alt= "beach mayo"><button onclick={bkmk}></button></img>

    <img src="mayo7.jpg" alt= "thinking mayo"><button onclick={bkmk}></button></img>

    </div>

    </div>




    );
    }
    }
    
    ReactDOM.render(<PhotoApp2 />, document.getElementById("root"));

    
    
    