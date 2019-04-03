import React from 'react';
import Greeting from './greeting';

function App(){
    return (
        <div>
            <h1 id="main-header" className="center">I'm the app component</h1>

            <Greeting name="Sally" favColor="blue" food="pizza"/>
            <Greeting name="Sarah"/>
            <Greeting />
            <Greeting name="Thomas"/>
        </div>
    );
}

export default App;
