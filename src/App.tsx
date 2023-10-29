import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Get from './Module/pages/Get';
import Create from './Module/pages/Create';
import Update from './Module/pages/Update';

function App() {
  return (
    <div className="App">
           <BrowserRouter>
    
      <Routes>
        <Route path='/data' element={<Get/>}  />
        <Route path='/create' element={<Create/>}  />
        <Route path='/update/:Id' element={<Update/>}  />


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
