import Item from '..//ImageGalleryItem'
import React,{Component} from 'react' 
import l from "./ImageGallery.module.css"

class List extends Component{

  

  render(){
    return (
      <ul className={l.list}>
        <Item hits={this.props.hits} open={this.props.openModal} toggleModal={this.props.onClick}/>
      </ul>
    );
  }

  }
  
  export default List;