import React from "react";

export default function Profile(props){

    return(
        <div className="profile">
            <img src={props.src} alt={props.alt}/>
            <h1 className="profile-name">{props.name}</h1>
            <p className="profile-info">{props.info}</p>
        </div>
    )
}