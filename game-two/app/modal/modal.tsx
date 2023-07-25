import { useState } from "react"
import ReactDOM, { createPortal } from "react-dom"
import Quiz from "../quiz/quiz"

export default function QuizModal() {


    return(
        <>
            <div className="box-content absolute h-2/3 w-2/5 z-10 right-40 bottom-40 bg-[#92400e] drop-shadow-[0_35px_35px_rgba(240, 240, 240, 0.2)]">
                HEY BABE
                WELCOME TO THE SOUNDS QUIZ
                <Quiz/>
            </div>
        </>
    )
}