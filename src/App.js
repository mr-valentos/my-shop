import './App.css';
import styled from "styled-components";
import Header from './components/header';
import Main from './components/main'
import Footer from './components/footer'


function App() {
  
  return (
    <DivApp className="App">
      <Header/>
      <Main/>
      <Footer/>
    </DivApp>

  );
}

export default App;



const DivApp = styled.div`
/* max-width: 93%; */
`;