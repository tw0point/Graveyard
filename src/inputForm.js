import React, {useState, useEffect} from 'react';

function InputForm(props){
    // An id state variable is used to keep track of figments so they can be deleted over time.
    const [id, setId] = useState(1);

    // Submission event handler. This event creates memories..
    function handleSubmit(event){
        event.preventDefault();
        props.addThought(event.target[0].value, id, 'memory');
        setId((prev) => prev + 1);
    }

    // Onchange event handler. This event creates figments.
    function handleChange(event){
        props.addThought(event.target.value, id, 'figment');
        setId((prev) => prev + 1);
    }

    // Return the form with all our handlers as props.
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="What can you remember?" onChange={handleChange} />
            <input type="submit" value="Remember"></input>
        </form>
    );

}

export default InputForm;