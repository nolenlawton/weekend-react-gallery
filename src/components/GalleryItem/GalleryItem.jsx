import './GalleryItem.css'

function GalleryItem({item, changeView, likePhoto}) {
    const showDescription = () => {
        changeView(item)
    }

    const like = () => {
        likePhoto(item)
    }

    if (item.image === true) {
        return(
        <div>
            <img onClick={showDescription} src={item.path}/>
            <div><button className={item.isLiked ? 'liked': 'like'} onClick={like}>♡</button> {item.likes}</div>
        </div>
        )
    }
    else if (item.image === false) {
        return(
        <div>
            <div className='description' onClick={showDescription}>{item.description}</div>
            <div><button className={item.isLiked ? 'liked': 'like'} onClick={like}>♡</button> {item.likes}</div>
        </div>
        )
    }
}

export default GalleryItem
