import React, {Component} from 'react';

const API_KEY = 'X3aNQZj7BdSiNk8EUjNBImIKplVeWrVEfeVislMQ';

export default class GetImageButton extends Component{

fetchRoverImage(){

  this.setState({camera: this.props.camera, rovers: this.props.rovers, sol: this.props.sol});
    let cam = this.state.camera;
    let rove = this.state.rovers;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
};

  render(){
    return(
    <div>
    <input type="submit" value="Get Rover Image" onClick={this.fetchRoverImage}/>
    </div>
  )
  }
}
