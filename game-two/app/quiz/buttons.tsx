import { useState } from "react"




export function NextButton() {

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const goForward = () => {
     const prevQues = currentQuestion - 1;
        prevQues >= 0 && setCurrentQuestion(prevQues);
    }


    return (
        <>
            {currentQuestion > 4 ? 
                <>
                    <button>
                        Try Again?
                </button>
                </>
                : 
                <>

        <button className=" float-right m-5 absolute bottom-0 right-0 font-mono" onClick={goForward}>
            Next
        </button>
                    </>
}
        </>

    )
}

export function Start() {

    return (
        <button>
            Let&apos;'s Go!
        </button>
    )
}

export function BackButton() {
     const [currentQuestion, setCurrentQuestion] = useState(0)
    const goBack = () => {

        const nextQuestion = currentQuestion + 1
         nextQuestion < 0 && setCurrentQuestion(nextQuestion)
    }
    const hideButton =  currentQuestion == 0 ? true : false
    return (
        <button className=" float-left m-5 absolute bottom-0 left-0" onClick={goBack} hidden={hideButton}>
            Back
        </button>
    )
}

export function ScoreCard() {

    
    return (
        <>
            <div>
                <p>
            SCORE : 0 / 5
                </p>
            </div>
        </>
    )
}