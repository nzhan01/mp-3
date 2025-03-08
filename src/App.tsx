
import './App.css'
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Employment from "./components/Employment.tsx";
import Projects from "./components/projects/Projects.tsx"
import Main from "./components/Main.tsx";
import Education from "./components/Education.tsx";
import Achievements from "./components/Achievements.tsx";
import References from "./components/References.tsx";
import styled from "styled-components";


const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: #dad7cdff;
    height: 100%;

    @media screen and (max-width: 900px) {
        width: 100%;
        height: 100%;
        flex-direction: column;
    }
`;

const StyledWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
    
        
`;

function Root(){

  return(


      <StyledWrapper>
          <Header/>
          <StyledContainer>
              <Nav/>
              <Routes>
                  <Route path = {`/*`} element ={<Main/>} />
                  <Route path = {`/Education`} element ={<Education/>}/>
                  <Route path = {`/Employment`} element ={<Employment/>} />
                  <Route path = {`/Projects`} element ={<Projects/>} />
                  <Route path = {`/Achievements`} element ={<Achievements/>} />
                  <Route path = {`/References`} element ={<References/>} />
              </Routes>

          </StyledContainer>
          <Footer/>
      </StyledWrapper>

  );
}


const router = createBrowserRouter([{path : "*", Component: Root  }  ])
function App() {

  return <RouterProvider router={router} />;
}

export default App;

