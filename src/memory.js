import React, {useEffect, useState} from 'react';

function Memory(props){

    // Get a random position on the screen to display as a state variable.
    const [position, setPosition] = useState([0,0]);
    useEffect(() => {
        setPosition((prev) => {
            let x = Math.floor(Math.random()*100);
            let y = Math.floor(Math.random()*100);

            // I have set an exclusion zone around the user input box.
            let xNoGo = (x > 30 && x < 70) || x > 90;
            let yNoGo = (y > 15 && y < 60) || y > 90;
            let xOut = x > 90;
            let yOut = y > 90;
            while((xNoGo && yNoGo) || xOut || yOut){
                x = Math.floor(Math.random()*100);
                y = Math.floor(Math.random()*100);
                xNoGo = (x > 20 && x < 70) || x > 90;
                yNoGo = (y > 20 && y < 60) || y > 90;
                xOut = x > 90;
                yOut = y > 90;
            }

            return [x,y];
        })
    }, [])

    // Get a random fontsize as a state variable. Memories tend to have higher font sizes.
    const [fontsize, setFontsize] = useState(0);
    useEffect(() => {
        setFontsize((prev) => {
            let fontsize = (Math.random()*20)+20;
            return fontsize;
        })
    }, [])

    // Render memories just as a paragraph tag with some styling.
    return(
        <p
        style={
            {
                position: "absolute",
                left: position[0]+"%",
                top: position[1]+"%",
                zIndex: "0",
                fontSize: fontsize +"px",
                transition: `opacity 1s`
            }
        }
        >{props.memoryMsg}
        </p>
    )
}

export default Memory;