import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const previousStep = () => {
    if (step == 1) return;
    else setStep(step - 1);
  };

  const nextStep = () => {
    if (step == 3) return;
    else setStep(step + 1);
  };

  const toggleAppearence = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="close" onClick={() => toggleAppearence()}>
        &times;
      </button>
      {isOpen && (
        <>
          <div className="contianer">
            <div className="header">
              <div className={step == 1 ? "active" : ""}>1</div>
              <div className={step == 2 ? "active" : ""}>2</div>
              <div className={step == 3 ? "active" : ""}>3</div>
            </div>
            <div className="message">
              <p>{`step ${step}`}</p>
              <p>{messages[step - 1]}</p>
            </div>
            <div className="buttons">
              <button onClick={() => previousStep()}>
                <span>👈</span> Previous
              </button>
              <button onClick={() => nextStep()}>
                Next <span>👉</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
