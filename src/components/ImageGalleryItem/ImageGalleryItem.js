import i from './ImageGalleryItem.module.css'


function Item({hits}) {
  return (
    <>
      {hits.map((hit) => (
          <li key={hit.id} className={i.item}>
            <a href={hit.largeImageURL} className={i.link}>
              <img src={hit.webformatURL} className={i.img}/>
              </a>
          </li>
        ))}
    </>
  );
}

export default Item;

// id,webformatURL,largeImageURL 