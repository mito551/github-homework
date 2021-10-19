const initState = {
    quizzes: [
        {
            id: 1,
            title: "Geography",
            // tags: ["", ""]
            questions: [
                {
                    id: 1,
                    title: "Which of these U.S. states does NOT border Canada?",
                    answers: [
                        {
                            id: 1,
                            title: "Indiana",
                            correct: true,
                            // points: 10,
                        },
                        {
                            id: 2,
                            title: "Alaska",
                            correct: false,
                        }]
                },
                {
                    id: 2,
                    title: "Which of these countries was NOT a part of the Soviet Union?",
                    answers: [
                        {
                            id: 1,
                            title: "Poland",
                            correct: true,
                            // points: 10,
                        },
                        {
                            id: 2,
                            title: "Georgia",
                            correct: false,
                        }]
                }
            ]
        },
        {
            id: 2,
            title: "General Knowledge",
            // tags: ["", ""]
            questions: [
                {
                    id: 1,
                    title: "What is the longest that an elephant has ever lived?",
                    answers: [
                        {
                            id: 1,
                            title: "86 years",
                            correct: true,
                            // points: 10,
                        },
                        {
                            id: 2,
                            title: "142 years",
                            correct: false,
                        }]
                },
                {
                    id: 2,
                    title: "How many rings are on the Olympic flag?",
                    answers: [
                        {
                            id: 1,
                            title: "5",
                            correct: true,
                            // points: 10,
                        },
                        {
                            id: 2,
                            title: "7",
                            correct: false,
                        }]
                }
            ]
        }
    ]
}

export const reducer = (state = initState, action) => {

    return state
}

const action = (value) => {
    return {

    }
}