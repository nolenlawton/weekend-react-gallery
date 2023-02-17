import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import GalleryList from '../GalleryList/GalleryList';

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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

          <GalleryList getList={getList} galleryList={galleryList} />

      </div>
    );
}

export default App;
