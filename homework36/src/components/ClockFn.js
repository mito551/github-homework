import React, {useEffect, useState} from "react";

const ClockFn = () => {

    const dateNow = new Date()

    const [time, setTime] = useState({seconds: dateNow.getSeconds(), minutes: dateNow.getMinutes(), hours: dateNow.getHours()});

    const timeCounter = () => {
        setTime(time => {
            let seconds = time.seconds + 1;
            let minutes = time.minutes;
            let hours = time.hours;
            if (seconds === 60) {
                minutes += 1
                seconds = 0
            }
            if (minutes === 60) {
                hours += 1
                minutes = 0
            }
            if (hours === 24) {
                hours = 0
            }
            return {seconds, minutes, hours}
        })
    }

    useEffect(() => {
        setInterval(() => {
            timeCounter();
        }, 1000)
    }, [])

    const addZero = (what) => what > 9 ? what : "0" + what

    return (
        <>
            <h2 className="watchYourself">{addZero(time.hours)}:{addZero(time.minutes)}:{addZero(time.seconds)}</h2>
            {/*<button onClick={clickHandler}>counter up</button>*/}
        </>
    );

}

export default ClockFn