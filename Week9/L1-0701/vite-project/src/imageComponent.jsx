import { Component } from "react";
class ImageComponent extends Component {
render() {
return <img src={this.props.imgSource} alt={this.props.imgAlt}></img>
}
}

export default ImageComponent