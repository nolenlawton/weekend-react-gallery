import GalleryItem from "../GalleryItem/GalleryItem"
import './GalleryList.css'

function GalleryList({galleryList, changeView}) {
    return(
        <div className="list">

            {galleryList.map(item => (
                <>
                <GalleryItem changeView={changeView} key={item.id} item={item} />
                </>
            ))}

        </div>
    )
}

export default GalleryList