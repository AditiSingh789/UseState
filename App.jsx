import {React,useState }from 'react';

function App(){
    const [count ,setcounter]=useState(0);
    function updateCount(){
        setcounter(count+1);
    }
    return(
        <>
    <h1>Button clicked {count}</h1>
    <button onClick={updateCount}>Click</button>
    </>

    );
}
export default App;
//To update state in react we need hooks in function components
// Rules of Hooks:
// 1. must be written inside function component.
// 2. hook must be imported in component.
// 3. must be called at top level of component.apply.not in jsx part or inside any inside function.
// 4. hooks cannot be conditional.
// 5. all hooks names start with hook keyword.
// 6. useState accepts 1 value(initial value[int,str,bool,object,array etc] to be assigned to variable)and return 2 things currentstate,updating() which actually updates state...
//thus useState returns a value and function...only this function has ability to update the state...and this function returns new usestate(new val to be used)
//const [currState,changeState()]=useState(initialState)
       //this is the edited part
