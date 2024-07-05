import React, { useState } from "react";

function Quiz() {
  const [currQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    if (currQuestion === questions.length - 1) {
      return;
    }
    setCurrentQuestion(currQuestion + 1);
  };

  const prevQuestion = () => {
    if (currQuestion === 0) {
      return;
    }
    setCurrentQuestion(currQuestion - 1);
  };

  const questions = [
    {
      question: "First Question",
      option: ["option 1", "option 2", "option 3", "option 4"],
    },
    {
      question: "First Question 2",
      option: ["option a", "option b", "option c", "option d"],
    },
    {
      question: "First Question 3",
      option: ["option ab", "option bc", "option cd", "option ed"],
    },
  ];

  return (
    <div>
      <p>
        {currQuestion + 1}: {questions[currQuestion].question}
      </p>
      <ul>
        {questions[currQuestion].option.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>

      <button onClick={prevQuestion}>Prev</button>
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default Quiz;
