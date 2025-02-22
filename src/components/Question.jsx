import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({answers, questionText, onSelectAnswer, selectedAnswer, answerState, onSkipAnswer}) {
    return (
        <div id="question">
            <QuestionTimer timeout={15000} onTimeout={onSkipAnswer} />
            <h2>{questionText}</h2>
            <Answers 
                answers={answers}
                answerState={answerState}
                selectedAnswer={selectedAnswer} 
                onSelect={onSelectAnswer}/>
        </div>
        
    )
}