import * as React from 'react';

const colors = ['#f9bdd7','#d3ede4', '#d4effb', '#fddbdc', '#9bb0de', '#86cccc'];
const HueContext :React.Context<string> = React.createContext('#ffffff');
var colorIndex = 0;


function getHue() :string{
    let color = colors[colorIndex];
    colorIndex += 1;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    return color;
}



const HueProvider :React.FC = ({children}) => (
    <HueContext.Provider value={getHue()}>
        {children}
    </HueContext.Provider>
)

export default HueContext;