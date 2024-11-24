import React, { useState } from 'react'
import Shoes from './components/Shoes';
import Saree from './components/Saree';
import Kurta from './components/Kurta';
import Lehanga from './components/Lehanga';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gouns from './components/Gouns';
import Dress from './components/Dress';
import LehangaDetail from './components/LehangaDetail';



const App = () => {
  // const [data, setData]=useState(20)
  return (
    // <div className=" d-flex text-center justify-content-center mx-auto mt-5">
    //   <button onClick={()=>setData(data+1)}className='btn btn-primary rounded'>increment</button>
    //  <p className='mx-3'>{data}</p>
    //  <button onClick={()=>setData(data-1)}className='btn btn-primary rounded'>decrement</button>
    // </div>
    <div>
    <Navbar/>
    <Routes>
      <Route path='/shoes' element={<Shoes/>}></Route>
      <Route path='/saree' element={<Saree/>}></Route>
      <Route path='/kurta' element={<Kurta/>}></Route>
      <Route path='/gouns' element={<Gouns/>}></Route>
      <Route path='/lehanga' element={<Lehanga/>}></Route>
      <Route path='/lehanga/:id' element={<LehangaDetail/>}></Route>
      <Route path='/dress' element={<Dress/>}></Route>
    </Routes>  
    </div>
  )
}
export default App

