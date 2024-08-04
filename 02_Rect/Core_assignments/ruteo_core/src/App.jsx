import { useState } from 'react';
import './App.css';
import ApiAxios from './components/ApiAxios';
import GalleryList from './components/GalleryList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import PieceOfGallery from './components/PieceOfGallery';
import NotFound from './components/NotFound'

function App() {
  const [galleryArray, setGalleryArray] = useState([{}])
  console.log(galleryArray)
  
  return (
    <div className='main'>
      <ApiAxios setGalleryArray={setGalleryArray} />
      <Routes>
        <Route
              path="/"
              element={<Navigate to="/home" replace />}
            />
        <Route path="/home" element={      
          <>
            <h2>Digital Art Gallery</h2>
            <GalleryList galleryArray={galleryArray}/>
          </>
          }/>
        <Route path="/art/:id" element={<PieceOfGallery galleryArray={galleryArray} />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
