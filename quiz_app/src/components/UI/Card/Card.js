import { useState } from "react";
import Button from "../Button/Button";
import "./Card.css"; 


const Card = ({  question, correctAnswerMarkUpdate, attempt, options, answer ,setQsns,qsn ,setCard,qsnAttempt}) => {
    // Creating an array of options
    const optionsArray = [options.option1, options.option2, options.option3, options.option4];
    // State variable to track the marked status of the button
    const [marked, setMarked] = useState(false);

    // Event handler to handle the click event on the options
    const click = (clicked) => {
        // Increase the question attempted
        setQsns(qsn+1)
        // Mark the button as clicked
        setMarked(true)        
        if (qsnAttempt === 4) {
            // Show the result if all question are attempted
            setCard(true)
          }
        if (clicked === answer)
            // Increase the score if the answer is correct
            correctAnswerMarkUpdate(attempt + 1)
    }


    return (
        <div className="card-container">
          <h4 className="question">{question}</h4>
          <div className="options-container">
            {optionsArray.map((option, index) => (
              <Button
                key={index}
                marked={marked}
                onClick={() => click(option)}
                className={!marked ? "option-button" : "disabled-option-button"}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      );
      
}

export default Card;
