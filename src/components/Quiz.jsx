import { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import Question from './Question';
import Summary from './Summay';

export default function Quiz() {
    
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
        setUserAnswers(
            prevState => [
                ...prevState,
                answer
            ]
        )
    
    },[]);

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null)
    }, [handleSelectAnswer])

    if (quizIsCompleted) {
        return (
            <Summary userAnswers={userAnswers} />
        )
    }

    return (
        <div id='quiz'>
            <div id='question'>
                <Question 
                    key={activeQuestionIndex}
                    questionIndex={activeQuestionIndex}
                    onSelectAnswer={handleSelectAnswer}
                    onSkipAnswer={handleSkipAnswer} />
            </div>
            
        </div>
    );
}