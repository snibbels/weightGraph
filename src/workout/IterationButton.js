import React from 'react';
import { MdPause, MdStop } from 'react-icons/lib/md';

const IterationButton = ({
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

    return (
        <div className={className}>
            <MdPause className="w3-circle"
                style={style} />
        </div>
    )
}



export default IterationButton;