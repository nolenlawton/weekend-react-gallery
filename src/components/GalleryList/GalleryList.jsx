import GalleryItem from "../GalleryItem/GalleryItem"
import './GalleryList.css'

function GalleryList({galleryList, getList}) {
    return(
        <div className="list">

            {galleryList.map(item => (
                <GalleryItem getList={getList} key={item.id} item={item} />
            ))}

        </div>
    )
}

export default GalleryList