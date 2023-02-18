import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import PhotoForm from '../PhotoForm/PhotoForm';

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
  getList();
  }, []); 

  const getList = () => {
    axios.get('/gallery')
      .then((response) => {
        setGalleryList(response.data);
      }).catch((err) => {
        console.error('GET error', err);
      });
  };

  const likePhoto = (item) => {
    axios.put(`/like/${item.id}`, item)
        .then((response) => {
    
            getList();
        })
        .catch((err) => {
            alert("Error Liking Photo");
            console.log(err);
        });
  };

  const changeView = (item) => {
    axios.put(`/gallery/${item.id}`, item)
          .then((response) => {
              getList();
          })
          .catch((err) => {
              console.log(err);
          });
  };

  const addPhoto = (newItem) => {
    axios.post('/newPhoto', newItem)
        .then((response) => {
            getList();
        }).catch((err) => {
            console.error('in POST error', err);
        });
  }



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
          <PhotoForm addPhoto={addPhoto} />
          <GalleryList changeView={changeView} likePhoto={likePhoto} galleryList={galleryList} />
      </div>
    );
}

export default App;
