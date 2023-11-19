import React, {useEffect, useState} from 'react';

function Figment(props){

    // Get a random position on the screen to display as a state variable.
    const [position, setPosition] = useState([0,0]);
    useEffect(() => {
        setPosition((prev) => {

            let x = Math.floor(Math.random()*100);
            let y = Math.floor(Math.random()*100);

            // I want the first figment to appear in the same place each time.
            if(props.figmentId === 0){
                x = 5;
                y = 80;
                return [x,y];
            }

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

    // Get a random fontsize as a state variable.
    const [fontsize, setFontsize] = useState(0);
    useEffect(() => {

        // I want the first figment to be pretty big so people can see it.
        if(props.figmentId === 0){
            setFontsize((prev) => {
                let fontsize = 25;
                return fontsize;
            })
        }else{
            setFontsize((prev) => {
                let fontsize = (Math.random()*20)+15;
                return fontsize;
            })
        }
    }, [])

    // This controls the death of figments - how they fade out, how they are removed from the figment array.
    const [opacity, setOpacity] = useState(1);
    useEffect(() => {
        console.log("Called. TTL = " + props.ttl);
        console.log("Memory ID = " + props.figmentId);
        
        const opacityTimer = setTimeout(setOpacity, (props.ttl*500), 0);
        const dieTimer = setTimeout(props.removeFigment, (props.ttl*1000), props.figmentId);

        return () => {
            clearTimeout(opacityTimer);
            clearTimeout(dieTimer);
        }
    }, [])

    // Render figments just as a paragraph tag with some styling.
    return(
        <p
        style={
            {
                position: "absolute",
                left: position[0]+"%",
                top: position[1]+"%",
                zIndex: "0",
                opacity: opacity,
                fontSize: fontsize +"px",
                transition: `opacity 1s`
            }
        }
        >{props.figmentMsg}
        </p>
    )
}

export default Figment;