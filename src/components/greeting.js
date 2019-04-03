import React from 'react';

function Greeting(props){
    console.log('Greeting Props:', props);

    return <h1>Hello {props.name}, Welcome to our site!</h1>;
}

export default Greeting;
