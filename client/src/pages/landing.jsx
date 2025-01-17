import React from "react"
import "../assets/w3.css"
import { Link } from "react-router-dom"

function Landing(){
    return(
   <section>
     <div>
        <h2>Welcome to WanderNest!</h2>
        <p>WanderNest is a platform that connects travelers with local activities and attractions. Explore the world and discover new places to visit.</p>
        <div>
            <img src={require("../assets/liz-weddon-dsP1RAlKzOA-unsplash.jpg")}></img>
        </div>
        <button className="w3-button w3-black w3-round-large w3-margin-top" > <Link to={"/login"}/>Explore</button>
    </div>
   </section>     
   )
}

export default Landing