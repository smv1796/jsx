// Import React and ReactDOM libraries
import React from "react"
import ReactDOM from "react-dom" 

// Create a React Component
const App=()=>{
    const getButtonText={
        text:"Click me!"
    }
    return (
        <div>
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor:"blue", color:'white'}}>
            {getButtonText.text}
        </button>
        </div>
    );
};

// Take the React Component and show it on the screen 
ReactDOM.render(<App/>, document.getElementById('root'));