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
      question: "When was the first time we started talking?",
      options: [
        "October 30, 2023",
        "October 31, 2023",
        "November 1, 2023",
        "November 2, 2023",
      ],
      answer: "October 31, 2023",
    },
    {
      question: "When did we first meet?",
      options: [
        "March 14, 2024",
        "March 15, 2024",
        "March 16, 2024",
        "March 17, 1990",
      ],
      answer: "March 14, 2024",
    },
    {
      question: "Where did we first meet?",
      options: [
        "Kathmandu, Nepal",
        "Bangalore, India",
        "San Francisco, US",
        "New York, US",
      ],
      answer: "Bangalore, India",
    },
    {
      question: "Where did you have first lunch with Amu in Nepal?",
      options: [
        "Spice Resturant",
        "Busy Bee Resturant",
        "Tukchee Thakali",
        "Red Mud Cafe",
      ],
      answer: "Tukchee Thakali",
    },
    {
      question: "What did Amu say when he first texted you?",
      options: ["Namaste", "Hey!", "Hey Beautiful.", "Hello!"],
      answer: "Hey!",
    },
    {
      question:
        "What are the two most important love languages for Amu and Saiyu?",
      options: [
        "Acts of Service and Quality Time",
        "Compliments and Gifts",
        "Gifts and Physical Touch",
        "Quality Time and Physical Touch",
      ],
      answer: "Quality Time and Physical Touch",
    },
    {
      question:
        "What is the most important thing Amu wants you to know (only one even if all are true)?",
      options: [
        "He will alwyas be there for you.",
        "He will never break your heart and always supports you and respect you.",
        "He will keep you happy.",
        "He will cook for you.",
      ],
      answer:
        "He will never break your heart and always supports you and respect you.",
    },
    {
      question: "What is the ideal form of relationship?",
      options: [
        "One with Respect, Trust, and Love",
        "One with Lots of Gifts",
        "One with Lots of Sex and traveling",
        "One with Love and Money",
      ],
      answer: "One with Respect, Trust, and Love",
    },
    {
      question:
        "Pick the most important goal you both wanna achieve before end of this year.",
      options: [
        "Travel to a new country",
        "Finalize the plan to close the gap and end LDR and live together",
        "Get a new job",
        "Visit each other at least 2 times",
      ],
      answer:
        "Finalize the plan to close the gap and end LDR and live together",
    },
    {
      question:
        "When do you think was the first time for Amu when he knew he wanted to be in a relationship with you?",
      options: [
        "When he first saw you",
        "When he first talked to you",
        "Three weeks after talking to you",
        "When he first had sex with you",
      ],
      answer: "Three weeks after talking to you",
    },
    {
      question: "What do you think Amu finds most attractive about you?",
      options: [
        "Your smile",
        "When you give a kiss to him on facetime",
        "Your morning voice when you say 'Good Morning, I Love You'",
        "Your personality",
      ],
      answer: "Your morning voice when you say 'Good Morning, I Love You'",
    },
    {
      question:
        "Imagine Amu is watching one of the important Real Madrid games and you are having a bad day and need attention. What do you think would Amu would do?",
      options: [
        "He will ignore you and watch the game",
        "He will watch the game but also give you attention",
        "He will stop watching the game and try to understand your problem and cheer you and watch the highlights later",
        "He will ask you to sleep until game is done.",
      ],
      answer:
        "He will stop watching the game and try to understand your problem and cheer you and watch the highlights later",
    },
    {
      question: "How excited are you for August 23rd, 2024?",
      options: [
        "Amu knows, the only answer is 'More than any thing in the world.'",
        "Amu knows, the only answer is 'More than any thing in the world.'",
        "Amu knows, the only answer is 'More than any thing in the world.'",
        "Amu knows, the only answer is 'More than any thing in the world.'",
      ],
      answer:
        "Amu knows, the only answer is 'More than any thing in the world.'",
    },
    {
      question: "What kind of date do you prefer on a rainy day?",
      options: [
        "Go shopping and have a dinner",
        "Go on a long drive and have a coffee",
        "Go out and enjoy the rain",
        "Stay in cook together, watch movies, cuddle and sex",
      ],
      answer: "Stay in cook together, watch movies, cuddle and sex",
    },
  ];

  return (
    <div>
      <h1 style={{ color: "pink" }}>Amu &#10084; Saiyu</h1>
      <h3>
        {currQuestion < 5
          ? "These are just some warm up questions mutu."
          : "Alright, lets get it real now."}
      </h3>
      <h3>{currQuestion < 5 ? "Be prepared for the real ones." : ""}</h3>
      <h2>
        {currQuestion + 1}: {questions[currQuestion].question}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {questions[currQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            style={{
              width: "400px",
              margin: "5px 0", // Changed to vertical margin only
              color: "black",
              backgroundColor:
                selectedAnswers[currQuestion] === option ? "#556b2f" : "white",
              display: "block", // Ensures the button takes full width
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
