import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import NavLayout from './layout/NavLayout';
import FooterLayout from './layout/FooterLayout';
import Navbar from './components/home/Navbar';


function Layout() {
  return (
    <>
      <NavLayout />
     
      <FooterLayout/>
    </>
  );
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/navbar" element={<Navbar />} />

      </Route>
    
    </>
  )
)

function App() {
  
    return <RouterProvider router={router} />;
}

export default App;
