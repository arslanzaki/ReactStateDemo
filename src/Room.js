import React,{useState} from 'react';



function Room() {

    const [isLit, setLit] = useState(true);  //returns Array with values [true,f()]
    // Means isLit = true & setLit = f()
    let [counter, setCounter] = useState(0);
    function updateLit() {
        console.log("Button Clicked");
        setLit(!isLit);
    }

    //Another syntax of function i.e. Arrow Function
    const updateCounter = () =>
    {
        //We can put the whole syntax starting from () as a parameter in {   } below
        console.log("Counter Button Clicked")
        setCounter(++counter);
    }
return(
    <div>This Room is {isLit ? "Lit":"Dark"}
    <br/>
    <button onClick={updateLit}>Toggle Button</button>
    <br/>
    Counter: {counter}
    <br/>
    <button onClick = {updateCounter}>Counter Button</button>
    </div>
);
    
}

export default Room;