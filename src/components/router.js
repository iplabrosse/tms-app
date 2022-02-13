import Create from './create';
import Read from './read';
import Update from './update';
import { Routes, Route } from 'react-router-dom'

export const Router  = () => {
    return (
      <Routes>
          <Route path="/create" element={<Create/>}/>
          <Route path="read" element={<Read/>}/>
          <Route path="update" element={<Update/>} />
      </Routes>
    );
};