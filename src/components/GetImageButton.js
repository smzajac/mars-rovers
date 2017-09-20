import React, {Component} from 'react';


export default class GetImageButton extends Component{

  render(){
    return(
    <div>
    <input type="submit" value="Get Rover Image" onClick={this.props.onClick}/>
    </div>
  )
  }
}
