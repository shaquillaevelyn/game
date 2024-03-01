import { BackButton, NextButton, ScoreCard, Start } from "./buttons"

export interface QuizQuestions {
    question: string;
    number: number;
    href?: string | null;
    altText?: string | null;
}

export interface QuizAnswers{
    answer: string;
    correct: boolean;
    number: number;
    href?: string | null;
    altText?: string | null;
}

export default function Quiz(){
    return (
        <>
            <ScoreCard/>
            <main>
             <Questions />

          
            </main>
            <section>
            <Start/>
            <NextButton />
            <BackButton />

            </section>



        </>
    )
}

export function Questions() {
    return (
        <>

                <h2 className="font-mono">Test your Sounds knowledge from this week 🎵🎹🎤
                    Are you ready?</h2>

        </>
    )
}