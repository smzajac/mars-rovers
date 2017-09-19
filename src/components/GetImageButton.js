import React, {Component} from 'react';

function GetImageButton(props){
    return (
        <div>
            <input type="submit" value="Get Rover Image" onClick={props.onClick}/>
        </div>
    )
}

export default GetImageButton;
