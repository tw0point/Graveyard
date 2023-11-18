import React, { useState, useEffect } from "react";
import InputForm from "./inputForm";
import Figment from "./figment";
import Memory from "./memory";
import '../src/index.css';

function App() {
  const ttl = 5; // Time to live - How long do memories stay up?

  // A state variable for 'figments' to be dispalyed momentarily.
  const [figments, setFigments] = useState([{ 
    message: "They all fade away eventually.",
    id: 0
  }]);

  // A state variable for memories to be held permanently.
  const [memories, setMemories] = useState([{}]);


  // Function to update either memory or figment array.
  const addThought = (newMessage, newId, type) =>
  {
    let newObj = {
      message: newMessage,
      id: newId
    };
    if(type === 'memory'){
      setMemories((prev) => [...prev, newObj]);
    }else{
      setFigments((prev) => [...prev, newObj]);
    }
  }

  // Function to remove figments as they die.
  const removeFigment = (deadId) =>
  {
    setFigments((prev) => {
    return prev.filter((figmentObject,id) => figmentObject.id !== deadId)
    });
  }



  // Return main structure of App.
  return (
    <>
    <h1>Graveyard</h1> {/* Static Header */}
    <InputForm addThought={addThought}/> {/* Input form with input text field and submit button. */}
    {
      // This renders all the figments as they come in with their necessary props.
      figments.map((figment) => { 
        return <Figment figmentMsg={figment.message} figmentId={figment.id} removeFigment={removeFigment} ttl={ttl}/>
      })
    }
    {
      // This renders memories permanently.
      memories.map((memory) => { 
        return <Memory memoryMsg={memory.message} memoryId={memory.id}/>
      })
    }
    </>
  );
}

export default App;
