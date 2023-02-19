import './GalleryItem.css'

function GalleryItem({item, changeView, likePhoto, deletePhoto}) {
    const showDescription = () => {
        changeView(item)
    }

    const like = () => {
        likePhoto(item)
    }

    const deleteIt = () => {
        deletePhoto(item.id)
    }

    if (item.image === true) {
        return(
        <div>
            <img onClick={showDescription} src={item.path}/>
            <div>
                <button className={item.isLiked ? 'liked': 'like'} onClick={like}>♡</button>
                <span className='number'>{item.likes}</span>
            </div>
        </div>
        )
    }
    else if (item.image === false) {
        return(
        <div>
            <div className='description' onClick={showDescription}>
                {item.description}
                <div>
                    <button className='delete' onClick={deleteIt} >Delete</button>
                </div>
            </div>
            <div>
                <button className={item.isLiked ? 'liked': 'like'} onClick={like}>♡</button> 
                <span className='number'>{item.likes}</span>
            </div>
        </div>
        )
    }
}

export default GalleryItem
