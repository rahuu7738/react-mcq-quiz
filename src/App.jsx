import React, { useState } from "react";
import "./style.css";

const questions = [
  {
    question: "What does ReactJS use to increase performance?",
    options: ["Virtual DOM", "Real DOM", "Shadow DOM", "None of the above"],
    answer: "Virtual DOM",
  },
  {
    question:
      "Which hook is used for managing state in a functional component?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState",
  },
  {
    question: "React is a ___",
    options: ["Library", "Framework", "Database", "Language"],
    answer: "Library",
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      <h1>ReactJS MCQ Quiz</h1>

      {showResult ? (
        <div className="result">
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score} / {questions.length}
          </p>
          <button className="play-again-btn" onClick={handleRestart}>
            Play Again
          </button>
        </div>
      ) : (
        <div className="question-card">
          <div className="progress">
            Question {current + 1} of {questions.length}
          </div>
          <h2>
            Q{current + 1}. {questions[current].question}
          </h2>
          <div className="options">
            {questions[current].options.map((opt, idx) => (
              <button key={idx} onClick={() => handleNext(opt)}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
