import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Home = () => {

    const quizzes = useSelector(state => state.quizzes)

    const renderQuizzes = () => {
        return quizzes.map(q =>
            (<div className="home-quizContainer" key={q.id}>
                <span className="home-quizName">{q.title}</span>
                <Link className="home-quizLink" to={`/quiz/${q.id}`}>▶</Link>
            </div>))
    }

    return (
        <div className="homeContainer">
            <h1 className="homeTitle">Select your quiz</h1>
            {renderQuizzes()}
        </div>
    )
}

export default Home;