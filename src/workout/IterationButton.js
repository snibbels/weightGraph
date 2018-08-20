import React from 'react';
import { MdPause, MdStop } from 'react-icons/lib/md';

const IterationButton = ({ isLastExercise, isLastSet,
    iterate = f => f, pause = f => f, className,
    timeBetweenSets = 1 * 1000 * 60, timeBetweenExercises = 3 * 1000 * 60 }) => {

    const onNextExercise = () => {
        pause(timeBetweenExercises, iterate)
    }

    const onNextSet = () => {
        pause(timeBetweenSets, iterate)
    }

    const style = {
        width: "100%",
        maxWidth: "500px",
        height: "auto",
        color: "#2395F388",
        border: "20px solid #2395F388"
    };

    if (isLastExercise && isLastSet)
        return (
            <div
                className={`w3-large`}
                style={{ textDecoration: "none" }}
                onClick={iterate} to="/">
                <h3>Training beenden</h3>
                <MdStop className="w3-circle"
                    style={style} />
            </div>
        );
    else
        return (
            <div className={className}>
                <h3>Pause: {(isLastSet ? timeBetweenExercises : timeBetweenSets) / (60 * 1000)} min</h3>
                <MdPause className="w3-circle"
                    style={style}
                    onClick={isLastSet ? onNextExercise : onNextSet} />
            </div>
        )
}



export default IterationButton;