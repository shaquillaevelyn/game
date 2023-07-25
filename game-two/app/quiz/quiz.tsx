import { BackButton, NextButton, ScoreCard } from "./buttons"

export default function Quiz(){
    return (
        <>
            <ScoreCard/>
            <section>
                <h2>Test your Sounds knowledge from this week 🎵🎹🎤
                    Are you ready?</h2>
          
            </section>

            <Questions />
            

            <NextButton />
            <BackButton />

        </>
    )
}

export function Questions() {
    return (
        <>
            <h3>

            </h3>
        </>
    )
}