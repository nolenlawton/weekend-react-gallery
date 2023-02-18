import GalleryItem from "../GalleryItem/GalleryItem"
import './GalleryList.css'

function GalleryList({galleryList, changeView, likePhoto, deletePhoto}) {
    return(
        <div className="list">

            {galleryList.map(item => (
                <GalleryItem deletePhoto={deletePhoto} likePhoto={likePhoto} changeView={changeView} key={item.id} item={item} />
            ))}

        </div>
    )
}

export default GalleryList