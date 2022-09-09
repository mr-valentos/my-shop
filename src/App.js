import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import styled from "styled-components";
import Header from './components/header';
import Main from './components/main'
import Footer from './components/footer'
import Product from './components/main/Product';


function App() {
  
  return (
    <DivApp className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/product=:id' element={<Product/>} />
      </Routes>
      
      <Footer/>
    </DivApp>

  );
}

export default App;



const DivApp = styled.div`
/* max-width: 93%; */
`;