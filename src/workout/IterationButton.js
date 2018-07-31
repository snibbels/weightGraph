import React from 'react'
import { Link } from 'react-router-dom';
import { MdPause } from 'react-icons/lib/md'

const IterationButton = ({ isLastExercise, isLastSet, finish = f => f,
    iterate = f => f, pause = f => f, className }) => {
    const timeBetweenSets = 1 * 1000 * 60;
    const timeBetweenExercises = 3 * 1000 * 60;

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
            {
                isLastSet && isLastExercise ?
                    (<Link 
                        className="w3-large w3-hover-blue 
                            w3-border w3-round-large w3-col s12 m6 l3" 
                        onClick={finish} to="/">
                        Training Beenden
                    </Link>) :
                    <MdPause className="w3-circle"
                        style={style}
                        onClick={isLastSet ? onNextExercise : onNextSet} />
            }
        </div>
    );
}

export default IterationButton;