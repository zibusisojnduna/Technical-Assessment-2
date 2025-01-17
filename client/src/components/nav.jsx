import "../assets/w3.css"

function Navigation(){
    return(
      <div className="w3-bar" style={{backgroundColor:"#EEEEEE", display:"flex", padding:"5%", justifyContent:"space-around", alignItems:"center",}}>
      <a href="/" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><br></br>Home</a><br></br>
      <a href="/favorites" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><br></br>Favorites</a>
      <a href="/locations" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><br></br>Locations</a>
      <a href="/login" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><br></br>Login</a>
      <a href="/signUp" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><br></br>Sign Up</a>
      <a href="/profile" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><br></br>Profile</a>
    </div>
    )
}
export default Navigation