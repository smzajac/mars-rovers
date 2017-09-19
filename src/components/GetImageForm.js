import React, {Component} from 'react';
import GetImageButton from './GetImageButton';

const API_KEY = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=X3aNQZj7BdSiNk8EUjNBImIKplVeWrVEfeVislMQ';

export default class GetImageForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      rovers: [],
      camera: [],
      sol: []
    }
  }

  handleRover = (e) => {
    this.setState({rover: e.target.value})
  };

  handleCamera = (e) => {
    this.setState({camera: e.target.value})
  };

  handleSol = (e) => {
    this.setState({camera: e.target.value})
  };


  componentDidMount() {




    console.log('did mount');

    fetch(API_KEY)
    .then(results => results.json())
    .then(responseData => {
      this.setState({
        sol: responseData.photos[0].sol,
        rovers: responseData.photos[0].rover.name,
        camera:responseData.photos[0].camera.full_name});
    })
    .catch((error) => {
      console.log("Error with Fetching : ", error);
    });
  }



  render(){
    console.log(this.state.rovers);
    console.log(this.state.sol);
    console.log(this.state.camera);
    return(
      <div>
            <label htmlFor="rover">Rover</label>
      <select onChange={this.handleRover} id="rover" value={this.state.value}>
        <option value="Curiosity">Curiosity</option>
        <option value="Opportunity">Opportunity</option>
        <option value="Spirit">Spirt</option>
      </select>
      <label htmlFor="camera">Camera Type</label>
      <select onChange={this.handleCamera} id="rover" value={this.state.value}>
        <option value="fhaz">FHAZ (Front Hazard)</option>
        <option value="rhaz">RHAZ (Rear Hazard)</option>
        <option value="navcam">NAVCAM (Navigation Cam)</option>
      </select>
      <label htmlFor="sol">Martian Sol: 1000-2000</label>
      <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
      <GetImageButton {...this.state} />
      </div>
    );

  }
}
