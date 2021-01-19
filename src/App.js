import './App.css';
import pie from './piechart.png';
import React, {useState} from 'react';

function App() {
  const questions = [
    {
      question: "What is the percentage of 30/40?",
      possibleAnswers: [
        {answer: "50%", isCorrect: false},
        {answer: "67%", isCorrect: false},
        {answer: "75%", isCorrect: true},
        {answer: "30%", isCorrect: false}
      ]
    },
    {
      question: "What is the percentage of 10/20?",
      possibleAnswers: [
        {answer: "50%", isCorrect: true},
        {answer: "25%", isCorrect: false},
        {answer: "67%", isCorrect: false},
        {answer: "33%", isCorrect: false}
      ]
    },
    {
      question: "What is the percentage of 20/100?",
      possibleAnswers: [
        {answer: "25%", isCorrect: false},
        {answer: "40%", isCorrect: false},
        {answer: "33%", isCorrect: false},
        {answer: "20%", isCorrect: true}
      ]
    },
    {
      question: "What type of ratio is 20/30?",
      possibleAnswers: [
        {answer: "part-to-whole", isCorrect: false},
        {answer: "part-to-part", isCorrect: true},
      ]
    },
    {
      question: "20/30 __ 30/40?",
      possibleAnswers: [
        {answer: "<", isCorrect: true},
        {answer: ">", isCorrect: false},
        {answer: "=", isCorrect: false},
      ]
    }
  ]

  const [currentQuestion, setQuestion] = useState(0);
  const [correct, setCorrect] = useState(true);
  const [end, setEnd] = useState(false);

  const handleQuestionNumber = (isCorrect) => {
    const next = currentQuestion + 1;
    setCorrect(true);
    if (isCorrect && next < questions.length) {
      setQuestion(next);
    }
    else if (!isCorrect){
      setCorrect(false);
    }
    else{
      setEnd(true);
    }
  }

  const handleRestart = () => {
    setQuestion(0);
    setEnd(false);
  }

  return (
    <div className='app'>
      <>
        <div className='question'>
          <div className='question-number'>
            <span>Quick Practice {currentQuestion + 1}</span>/{questions.length}
            <img className = 'pie' src = {pie} alt = "pie graph" />
          </div>
          <div className='question-text'>{questions[currentQuestion].question}</div>
          {!correct ? (<div>Please try again!</div>) : <div></div>}
          {end ? (<button onClick = {() => handleRestart()}>Restart</button>) : <div></div>}
        </div>
        <div className='answer'>
          {questions[currentQuestion].possibleAnswers.map((possibleAnswers) => 
            <button onClick = {() => handleQuestionNumber(possibleAnswers.isCorrect)}>{possibleAnswers.answer}</button>)}
        </div>
      </>
  </div>
  );
}

export default App;
