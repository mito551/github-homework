import './App.css';
import React, {useState} from "react";
import Sun from './modules/sun'
import Moon from './modules/moon'

const App = () => {

    const [classResult, setClass] = useState("sunStyle")
    const [isDaytime, setDaytime] = useState(true)

    const changeTime = () => {
        setClass(classResult => classResult==="sunStyle" ? "moonStyle" : "sunStyle")
        setDaytime(isDaytime => !isDaytime)
        // setText(textDisplay => classResult==="sunStyle" ? <Moon /> : <Sun />)
        // console.log(("className: " + classResult));
    }

    // const daytimeCheck = () => {
    //     return isDaytime ? <Sun /> : <Moon />
    // }

    return (
        <div className={classResult}>
            {isDaytime ? <Sun /> : <Moon />}
            <div onClick={changeTime} className={(classResult) + "_button"}>
            </div>
        </div>
    )

}

export default App;
