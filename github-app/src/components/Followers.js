import React from "react";


function Followers(props) {


    return(
    <div>
        {props.followers.map((item, i) => 
        <div>
            <h3>Follower 1: {item[0].login}</h3>
            <h3>Follower 2: {item[1].login}</h3>
    
        </div>
        )}
    </div>
    );
}

export default Followers;