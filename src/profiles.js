import React from "react";
import ReactDom from "react-dom";
import './styles.css';
import './photo-app1.js'; 
import './photo-app2.js';
import './photo-app3.js';
// import './bookmark.js';

ReactDom.render(
    <ul className = "profiles">
                <li className = "Profile1"><a href = "photo-app1.js"><img src= "doge1.jpg" alt= "Doge Profile Pic"></img><h1>Doge</h1></a></li>
                <li className = "Profile2"><a href = "photo-app2.js"><img src= "mayo1.jpg" alt= "Lil' Mayo Profile Pic"></img><h1>Lil' Mayo</h1></a></li>
                <li className = "Profile3"><a href = "photo-app3.js"><img src= "shark1.jpg" alt= "Shark Puppet Profile Pic"></img><h1>Shark Puppet</h1></a></li>
                
    </ul>,
    
    document.getElementById("root")
    
    );