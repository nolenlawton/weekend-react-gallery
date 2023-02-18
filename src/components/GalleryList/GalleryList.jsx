import GalleryItem from "../GalleryItem/GalleryItem"
import './GalleryList.css'

function GalleryList({galleryList, changeView, likePhoto}) {
    return(
        <div className="list">

            {galleryList.map(item => (
                <GalleryItem likePhoto={likePhoto} changeView={changeView} key={item.id} item={item} />
            ))}

        </div>
    )
}

export default GalleryList