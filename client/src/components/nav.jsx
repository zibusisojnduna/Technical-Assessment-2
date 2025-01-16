
import "../assets/w3.css"
function Navigation(){
    return(
      <div className="w3-bar" style={{backgroundColor:"#EEEEEE", display:"flex", padding:"5%", justifyContent:"space-around", alignItems:"center",}}>
      <a href="/" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><br></br>Home</a><br></br>
      <a href="/accommodations" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><br></br>Accommodation</a>
      <a href="/login" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><br></br>Login</a>
      <a href="/signup" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><br></br>Sign Up</a>
      <a href="/profile" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><br></br>Profile</a>
      <a href="/cart" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%",textAlign:"center"}}><br></br>Cart</a>
    </div>
    )
}
export default Navigation