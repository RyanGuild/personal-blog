import * as React from "react";
import styled from "styled-components";

export type GalleryProps = {
    widgets :Array<React.Component>
};

const Gallery = styled.div`
    @media screen 
    and (max-device-width: 500px){
        grid-template-columns: 1fr;
    }

    @media screen 
    and (min-device-width: 500px){
        grid-template-columns: repeat( auto-fit, 200px);
    }

    display: grid;
    grid-gap: 20px;
    margin:20px;
    grid-auto-rows: 200px;
    grid-auto-flow: row dense;
    overflow: scroll;
    width: auto;
`;

export default Gallery;