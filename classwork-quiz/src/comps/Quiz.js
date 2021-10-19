import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

const Quiz = () => {

    const history = useHistory()
    const {quizID} = useParams()
    const currentQuiz = useSelector(state => state.quizzes.find(quiz => quiz.id === +quizID))

    const [activeQIndex, setActiveQIndex] = useState(0)
    const [activeQuestion, setActiveQuestion] = useState({})

    useEffect(() => {
        if (currentQuiz !== undefined) {
            setActiveQuestion(currentQuiz.questions[activeQIndex])
        }
    }, [activeQIndex])

    const renderQuestion = () => {
        return (!activeQuestion.id ?
                    <div>No questions here</div>
            :       <div>
                {activeQuestion.title}
                {renderAnswers()}
            </div>)
    }

    const renderAnswers = () => {
        return (
            activeQuestion.answers.map(answer => (
                <div
                key={answer.id}
                onClick={() => {switchQuestion(answer.id)}}
            >
                {answer.title}
            </div>))
        )
    }

    const switchQuestion = () => {
        if (activeQIndex + 1 === currentQuiz.questions.length) {
            history.push('/')
        }
        setActiveQIndex(activeQIndex => activeQIndex + 1)
    }

    return (
        <div>
            Quiz
            {renderQuestion()}
        </div>
    )
}

export default Quiz;