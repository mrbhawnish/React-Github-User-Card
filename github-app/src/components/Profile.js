import React from "react";

function Profile (props) {
 
return(
   
   <div>
  {props.data.map((item, i) => 
    <div style={{border: "2px solid black"}} key={i}> 
     <img style={{maxWidth: "300px"}} src={item.avatar_url}></img>
       <ul>
       <li>Profile:</li> <a href="https://api.github.com/users/mrbhawnish">Check it out!</a>
       <br />
       <li>Followers:</li> {item.followers}
       <br />
       <li>Following:</li> {item.following}
       </ul>
     </div>
    )}

   </div>
   
   
 );




}

export default Profile;