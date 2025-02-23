import { useEffect, useState } from "react";

export default function QuestionTimer({timeout, onTimeout, mode}) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        console.log('set timeout');
        const time = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(time);
        }
    }, [timeout, onTimeout]);
    

    useEffect(() => {
        console.log('set interval');
        const interval = setInterval(() => {
            setRemainingTime(prevRemaingTime => prevRemaingTime - 100)
        }, 100);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return <progress id="question-time" max={timeout} value={remainingTime} className={mode} />
}