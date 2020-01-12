import * as React from "react"
import RG from "../components/rg"
import Gallery from "../components/gallery"
import styled from "styled-components"
import Header from "../components/header"


const Test1 = styled.div`
  background-color: red;
  grid-row: span 2;
  grid-column: span 2;
`;
const Test2 = styled.div`
  background-color: blue;
  grid-row: span 1;
  grid-column: span 1;
`;
const Test3 = styled.div`
  background-color: yellow;
  grid-row: span 1;
  grid-column: span 2;
`;

/**
 * @description The app entrypoint builds a container for the card views
 */
const App: React.FC = () => (
    <div>
      <Header/>
      <Gallery>
        <Test1 />
        <Test2 />
        <Test1 />
        <Test2 />
        <Test2 />
        <Test3/>
        <Test3/>
        
        <Test2 />
      </Gallery>
    </div>
);

export default App;
