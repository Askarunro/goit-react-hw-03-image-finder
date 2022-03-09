import Item from '..//ImageGalleryItem'
import l from "./ImageGallery.module.css"

function List({ hits }) {
    return (
      <ul className={l.list}>
        <Item hits={hits}/>
      </ul>
    );
  }
  
  export default List;