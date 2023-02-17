import './GalleryItem.css'

function GalleryItem({item, changeView}) {

    const showDescription = () => {
        console.log('show item', item)
        changeView(item)
    }


    if (item.image === true) {
        return(
        <div>
            <img onClick={showDescription} src={item.path}/>
            <div><button>Like</button> {item.likes}</div>
        </div>
        )
    }
    else if (item.image === false) {
        return(
        <div>
            <div className='description' onClick={showDescription}>{item.description}</div>
            <div><button>Like</button> {item.likes}</div>
        </div>
        )
    }
   
}

export default GalleryItem
