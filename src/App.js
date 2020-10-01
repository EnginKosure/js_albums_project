import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sandbox from './components/Sandbox';
import Pagination from './components/Pagination';
import Albums from './components/Albums';
import Info from './components/Info';
import './App.css';
import Footer from './components/Footer';

const App=()=>{
const [albums, setAlbums]=useState([]);
const [isLoading,setIsLoading]=useState(true);
const [pageNumber, setPageNumber]=useState(1)

useEffect(()=>{
  const fetchAlbums=async () => {
    const result= await axios(`https://jsonplaceholder.typicode.com/albums?_page=${pageNumber}`)
    setAlbums(result.data)
    setIsLoading(false)
  };
  fetchAlbums();
},[pageNumber])
    return(
      <>
        <Navbar/>
        <Header/>
        <Sandbox/>
        <Pagination getPageNumber={(npn)=>setPageNumber(npn)} />
        <Albums albums={albums} isLoading={isLoading} />
        <Info/>
        <Footer/>
      </>
    );
  } 

export default App;
