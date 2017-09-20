import React, {Component} from 'react';
import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';

const token = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=X3aNQZj7BdSiNk8EUjNBImIKplVeWrVEfeVislMQ';

const API_KEY = 'X3aNQZj7BdSiNk8EUjNBImIKplVeWrVEfeVislMQ';

export default class GetImageForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      rovers: 'curiosity',
      camera: 'FHAZ',
      sol: '1000',
      images: []
    }
  }

  fetchRoverImage = (e) => {
    e.preventDefault();

      let cam = this.state.camera;
      let rove = this.state.rovers;
      let num = this.state.sol;

      let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

      fetch(imageUrl)
      .then(results => results.json())
      .then(responseData => {
        this.setState({images: responseData.photos});
      })
      .catch((error) => {
        console.log("Error with Fetching : ", error);
      });
  };


  handleRover = (e) => {
    this.setState({rover: e.target.value})
  };

  handleCamera = (e) => {
    this.setState({camera: e.target.value})
  };

  handleSol = (e) => {
    this.setState({camera: e.target.value})
  };






  render(){
    console.log(this.state.rovers);
    console.log(this.state.sol);
    console.log(this.state.camera);
    return(
      <div>
            <label htmlFor="rover">Rover</label>
      <select onChange={this.handleRover} id="rover" value={this.state.rovers}>
        <option value="Curiosity">Curiosity</option>
        <option value="Opportunity">Opportunity</option>
        <option value="Spirit">Spirt</option>
      </select>
      <label htmlFor="camera">Camera Type</label>
      <select onChange={this.handleCamera} id="rover" value={this.state.camera}>
        <option value="fhaz">FHAZ (Front Hazard)</option>
        <option value="rhaz">RHAZ (Rear Hazard)</option>
        <option value="navcam">NAVCAM (Navigation Cam)</option>
      </select>
      <label htmlFor="sol">Martian Sol: 1000-2000</label>
      <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.sol}/>
      <GetImageButton onClick={this.fetchRoverImage} />
      <ImageDisplay images={this.state.images}/>
      </div>
    );

  }
}
