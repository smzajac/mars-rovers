import React, {Component} from 'react';

export default class ImageDisplay extends Component{
  render(){
    return(
      <ul>
        {this.props.images.map(image =>
            <li key={image.id}>
                <img src={image.img_src} alt=""/>
            </li>
        )}
      </ul>

    )
  }
}
