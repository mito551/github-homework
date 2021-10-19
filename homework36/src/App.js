import './App.css';
import React, {useState} from "react";
import Watch from './components/Watch'
import ClockFn from './components/ClockFn'

const App = () => {

    return (
        <div className="watchWrap">
            <ClockFn />
        </div>
    )

}

export default App;
