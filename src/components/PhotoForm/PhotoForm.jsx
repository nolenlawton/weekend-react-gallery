import { useState } from 'react';
import './PhotoForm.css'
import Button from '@mui/material/Button';

function PhotoForm({addPhoto}) {
    const [newPhoto, setNewPhoto] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let newItem = {
            path: newPhoto,
            description: newDescription
        }

        addPhoto(newItem, clearInputs());
    }

    const clearInputs = () => {
        setNewPhoto('');
        setNewDescription('');
    }

    return (
        <div className='photoForm'>
            <h2>Add Photo To Gallery</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    onChange={ (event) => setNewPhoto(event.target.value) } 
                    value={newPhoto}
                    type="text" 
                    placeholder="image URL" 
                    />
                </div>

                <div>
                    <input 
                    onChange={ (event) => setNewDescription(event.target.value) } 
                    value={newDescription}
                    type="text" 
                    placeholder="description" 
                    />
                </div>

                <Button id='addButton' type='submit' >Add To Gallery </Button>
            </form>
        </div>
    )
}

export default PhotoForm