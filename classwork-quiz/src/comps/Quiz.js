import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

const Quiz = () => {

    const history = useHistory()
    const {quizID} = useParams()
    const currentQuiz = useSelector(state => state.quizzes.find(quiz => quiz.id === +quizID))
    const dispatch = useDispatch()

    const [activeQIndex, setActiveQIndex] = useState(0)
    const [activeQuestion, setActiveQuestion] = useState({})
    const [score, setScore] = useState(0)
    const [isAnswered, setIsAnswered] = useState(false)

    useEffect(() => {
        if (currentQuiz !== undefined) {
            setActiveQuestion(currentQuiz.questions[activeQIndex])
        }
    }, [activeQIndex])

    const renderQuestion = () => {
        return (!activeQuestion.id ?
                    <div>No questions here</div>
            :       <div className="questionContainer">
                <span className="questionTitle">Q: {activeQuestion.title}</span>
                {renderAnswers()}
            </div>)
    }

    const renderAnswers = () => {
        return (
            activeQuestion.answers.map(answer => (
                <div
                key={answer.id}
                className="answerTitle"
                onClick={() => {switchQuestion(answer.id)}}
            >
                {answer.title}
            </div>))
        )
    }

    useEffect(() => {
        if (!isAnswered) {return}
        if (activeQIndex + 1 === currentQuiz.questions.length) {
            dispatch({type: 'SEND_SCORE', payload: {time: Date.now(), score, questions: currentQuiz.questions.length}})
            history.push('/leaderboard')
        } else {
            setActiveQIndex(activeQIndex => activeQIndex + 1)
        }
        setIsAnswered(false)
    },[isAnswered])

    const switchQuestion = (answerID) => {
        const answer = activeQuestion.answers.find(answer => answer.id === answerID)
        // setScore(score => {
        //     return answer.correct ? score + 1 : score
        // })
        if (answer.correct) {
            setScore(score => score + 1);
            console.log(`current score: ${score}`)
        }
        setIsAnswered(true)
    }

    return (
        <div className="homeContainer quizContainer">
            <h1 className="homeTitle quizTitle">{currentQuiz.title}</h1>
            {renderQuestion()}
        </div>
    )
}

export default Quiz;