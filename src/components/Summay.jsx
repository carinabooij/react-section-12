import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';

export default function Summary({userAnswers}) {
    const skippedAnswers = userAnswers && userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers && userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

    const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100); 
    const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);
    const incorrectAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedAnswersShare}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAnswersShare}%</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>{incorrectAnswersShare}%</span>
                    <span className='text'>answered incorrectly</span>
                </p>

            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    const skippedAnswer = answer === null;
                    const wrongAnswer = answer !== QUESTIONS[index].answers[0];
                    let cssClass = 'user-answer';


                    if (skippedAnswer) {
                        cssClass += ' skipped';
                    } else if (wrongAnswer) {
                        cssClass += ' wrong';
                    } else {
                        cssClass += ' correct';
                    }

                    return (
                        <li key={index}>
                            <h3>{index}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ? answer : 'Skipped'}</p>
                            {skippedAnswer || wrongAnswer ?
                            <p className='user-answer'>{QUESTIONS[index].answers[0]}</p>
                            : null}
                            
                        </li>
                    )
                })}
                
            </ol>
        </div>
    )
}