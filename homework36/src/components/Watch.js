import React, {Component} from 'react';

class Watch extends Component {

    constructor(props) {
        super(props)
        const dateRaw = new Date();
        this.state = {seconds: dateRaw.getSeconds(), minutes: dateRaw.getMinutes(), hours: dateRaw.getHours()}
    }

    secondCounter = () => {
        this.setState({...this.state, seconds: this.state.seconds + 1})
    }

    minuteCounter = () => {
        this.setState({...this.state, minutes: this.state.minutes + 1})
    }

    hourCounter = () => {
        this.setState({...this.state, hours: this.state.hours + 1})
    }

    startWatch = () => {
        setInterval(() => {
            this.secondCounter();
                if (this.state.seconds % 60 === 0) {
                    this.minuteCounter()
                    this.setState({...this.state, seconds: 0})
                }
                if (this.state.minutes % 60 === 0) {
                    this.hourCounter()
                    this.setState({...this.state, minutes: 0})
                }
                if (this.state.hours % 24 === 0) {
                    this.setState({...this.state, hours: 0})
                }
        }, 1000)
    }

    componentDidMount(){
        this.startWatch()
    }

    addZero = (what) => what > 9 ? what : "0" + what

    render() {
        return (
            <>
                <h2 className="watchYourself">{this.addZero(this.state.hours)}:{this.addZero(this.state.minutes)}:{this.addZero(this.state.seconds)}</h2>
                {/*<button onClick={this.startWatch} style={{display: "none"}}>Start the clock!</button>*/}
            </>
        );
    }
}

export default Watch;