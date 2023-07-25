export function NextButton() {
    return (
        <button className=" float-right m-5 absolute bottom-0 right-0 ">
            Next
        </button>
    )
}

export function BackButton() {
    return (
        <button className=" float-left m-5 absolute bottom-0 left-0">
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