import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
// import './bookmark.js';

class PhotoApp3{

    render(){
        const img = "shark1";

        const bkmk = document.createElement('bkmk');
        bkmk.src= './photo-app3.js';
        document.body.appendChild(bkmk);
    
    return(
        <div>
        <div>
        <li><a href = "nav-bar.js">NAVBAR</a></li>
    
        <div>
        <img src = {img} alt= "Shark Puppet Profile Pic"></img>
        </div>
    
        <div>
            <h1 className = "name3">Shark Puppet</h1>
        </div>
    
    <div className= "images"/>
    <img src="shark2.jpg" alt= "grass shark puppet"><button onclick={bkmk}></button></img>
        
    <img src="shark3.jpg" alt= "mac and cheese shark puppet"><button onclick={bkmk}></button></img>

    <img src="shark4.jpg" alt= "angry shark puppet"><button onclick={bkmk}></button></img>

    <img src="shark5.jpg" alt= "car shark puppet"><button onclick={bkmk}></button></img>

    <img src="shark6.jpg" alt= "beach shark puppet"><button onclick={bkmk}></button></img>

    <img src="shark7.jpg" alt= "upwards looking shark puppet"><button onclick={bkmk}></button></img>

</div>
</div>
    
    );
    }
    }
    
    ReactDOM.render(<PhotoApp3 />, document.getElementById("root"));
    
    