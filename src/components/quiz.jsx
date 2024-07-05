import React, { useState } from "react";

function Quiz() {
  const [currQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

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

  const handleOptionSelect = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currQuestion]: option,
    });
  };

  const cleaarSelectedAnswers = () => {
    setSelectedAnswers({});
  };

  const questions = [
    {
      question: "First Question",
      options: ["option 1 sadasda asda", "option 2", "option 3", "option 4"],
      answer: "option 1",
    },
    {
      question: "Second Question",
      options: ["option a", "option b", "option c", "option d"],
      answer: "option a",
    },
    {
      question: "Third Question",
      options: ["option ab", "option bc", "option cd", "option ed"],
      answer: "option ab",
    },
  ];

  return (
    <div>
      <p>
        {currQuestion + 1}: {questions[currQuestion].question}
      </p>
      <div>
        {questions[currQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            style={{
              width: "400px",
              margin: "5px",
              color: "black",
              backgroundColor:
                selectedAnswers[currQuestion] === option
                  ? "lightblue"
                  : "white",
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <br />
      <button
        style={{
          margin: "5px",
        }}
        onClick={prevQuestion}
      >
        Prev
      </button>
      <button
        style={{
          margin: "5px",
        }}
        onClick={nextQuestion}
      >
        Next
      </button>

      <div>
        <h3>
          {selectedAnswers[currQuestion]
            ? selectedAnswers[currQuestion] === questions[currQuestion].answer
              ? "Yayyy!!! Amu also selected the same option."
              : "Ohnoo!!! Amu selected different option."
            : "Select an option to see Amu's answer."}
        </h3>
        <h3>
          {selectedAnswers[currQuestion]
            ? "Amu's choice: " + questions[currQuestion].answer
            : ""}
        </h3>
      </div>

      <button
        style={{
          margin: "5px",
        }}
        onClick={cleaarSelectedAnswers}
      >
        Clear Selected Answers
      </button>
    </div>
  );
}

export default Quiz;
