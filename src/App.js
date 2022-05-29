import React, { useContext } from 'react';
// import './App.css'
import Sheet1 from './Sheet1';
import Home from './Home';
import Todo from './Todo';
import Sheet2 from './Sheet2';

import { Routes, Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { render } from '@testing-library/react';
import Sample from './Sample'



function App() {
    // const values = useContext(DataContext)
  return (
    <>
     <Sample>
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/:Sheet1'element={<Sheet1 />} />
           {/* <Route path='/Todo'element={<Todo />} /> */}
           <Route path='/Sheet2'element={<Sheet2 />} />
           {/* <Route path='/DataContext'element={<DataContext />} /> */}
        </Routes>
        
      </Sample>
          
    </>      
  );
  
}

export default App;