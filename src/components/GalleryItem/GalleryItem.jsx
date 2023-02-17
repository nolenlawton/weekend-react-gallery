import './GalleryItem.css'

function GalleryItem({item}) {

    const showDescription = () => {
        item.image = !item.image
        GalleryItem(item)
    }

    console.log(item.image)

    if (item.image === true) {
        return(
        <>
            <img onClick={showDescription} src={item.path}/>
        </>
        )
    }
    else if (item.image === false){
        console.log('description')
        return(
        <div className='description'>
            {item.description}
        </div>
        )
    }
}

export default GalleryItem
