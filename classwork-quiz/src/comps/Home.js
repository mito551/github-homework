import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Home = () => {

    const quizzes = useSelector(state => state.quizzes)

    const renderQuizzes = () => {
        return quizzes.map(q =>
            (<div key={q.id}>
                {q.title}
                <Link to={`/quiz/${q.id}`}>▶</Link>
            </div>))
    }

    return (
        <div>
            <h1>Select your quiz</h1>
            {renderQuizzes()}
        </div>
    )
}

export default Home;