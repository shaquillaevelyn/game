import { useState } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import Quiz from '../quiz/quiz';

export default function QuizModal() {
  return (
    <>
      <div className="box-content rounded-2xl absolute h-2/3 w-2/5 z-10 right-40 bottom-40 bg-[#92400e] drop-shadow-[0_35px_35px_rgba(240, 240, 240, 0.2)]">
        <h2>Weekly Sounds Quiz 🎵🎹🎤</h2>

        <p className="">
          Test your weekly sounds knowledge Can you get all five?
        </p>

        <Quiz />
      </div>
    </>
  );
}
