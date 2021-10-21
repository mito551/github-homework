import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Admin from "./Admin";
import Quiz from "./Quiz";
import Leaderboards from "./Leaderboards";
import {Switch, Route} from "react-router-dom";

const App = () => {

    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact={true}>
                    <Home />
                </Route>
                <Route path="/admin">
                    <Admin />
                </Route>
                <Route path="/quiz/:quizID">
                    <Quiz />
                </Route>
                <Route path="/leaderboard">
                    <Leaderboards />
                </Route>
            </Switch>

        </div>
    )
}

export default App