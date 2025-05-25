import React, { useState } from 'react';
import './Quiz.css';
import { data } from './Data.js';

const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [lock, setLock] = useState(false);

    const handleNext = () => {
        if (index < data.length - 1) {
            // Move to the next question
            setIndex(index + 1);

            // Reset lock and clear classes
            setLock(false);
            const options = document.querySelectorAll('.content h4');
            options.forEach((option) => {
                option.classList.remove('Correct', 'Wrong');
            });
        } else {
            alert('Quiz Completed!');
        }
    };

    const handleOptionClick = (e, optionIndex) => {
        if (!lock) {
            if (data[index].ans === optionIndex) {
                e.target.classList.add('Correct');
            } else {
                e.target.classList.add('Wrong');
            }
            setLock(true);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="heading">
                    <h2>Quiz App</h2>
                </div>

                <div className="content">
                    <h3>
                        {index + 1}: {data[index].question}
                    </h3>
                    <h4 onClick={(e) => handleOptionClick(e, 1)}>{data[index].option1}</h4>
                    <h4 onClick={(e) => handleOptionClick(e, 2)}>{data[index].option2}</h4>
                    <h4 onClick={(e) => handleOptionClick(e, 3)}>{data[index].option3}</h4>
                    <h4 onClick={(e) => handleOptionClick(e, 4)}>{data[index].option4}</h4>
                </div>
                <button className="btn" onClick={handleNext}>
                    Next
                </button>

                <div className="indexing">
                    {index + 1} of {data.length} Questions
                </div>
            </div>
        </div>
    );
};

export default Quiz;
