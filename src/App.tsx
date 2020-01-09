import React from "react"
import Seo from "./seo"
import Gallery from "./gallery"
import * as styled from "styled-components"


const Test1 = styled.div`
  background-color: red;
  grid-row-span: 2;
  grid-col-span: 2;
`;
const Test2 = styled.div`
  background-color: blue;
  grid-row-span: 1;
  grid-col-span: 1;
`;

/**
 * @description The app entrypoint builds a container for the card views
 */
function App() :JSX.Element{
  return (
    <div className="App">
      <Seo />
      <h1>Ryan Guild Consulting</h1>
      <Gallery>
        <Test1 />
        <Test2 />
        <Test2 />
      </Gallery>
    </div>
  );
}

export default App;
