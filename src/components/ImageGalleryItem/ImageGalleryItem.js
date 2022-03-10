import i from './ImageGalleryItem.module.css'
import React,{Component} from 'react'

class Item extends Component {

  onClick=(e)=>{
    const a = e.currentTarget.dataset.url
    console.log(a)
  }

 

render(){
  return (
    <>
      {this.props.hits.map((hit) => (
          <li key={hit.id} className={i.item} data-url={hit.largeImageURL}  onClick={this.onClick}>
              <img src={hit.webformatURL} className={i.img} />
          </li>
        ))}
    </>
  );
}
}

export default Item;
