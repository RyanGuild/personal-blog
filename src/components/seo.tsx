import React, { useState, useRef , useEffect} from "react";
import Helmet from "react-helmet";
import Rg from "./rg";

const Seo = () => {
  const [png, setPng] = useState(null);
  const ref = useRef();
  return (
    <div style={{display:"none"}}>
      <Rg ref={ref}/>
      <Helmet>
        <link rel="icon" href={png}></link>
        <title>RG Consulting</title>
      </Helmet>
    </div>
  );
};

export default <div></div>;
