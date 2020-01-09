import * as React from "react";
import * as styled from "styled-components";

export type GalleryProps = {
    widgets :Array<React.Component>
};

const Gallery = styled.div`
    display: grid;
    grid-auto-columns: 200px;
    grid-auto-rows: 200px;
    grid-auto-flow: row dense;
    overflow: scroll;
`;

export default Gallery;