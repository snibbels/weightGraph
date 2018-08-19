import React from 'react'
import PauseButton from './PauseButton';
import IterationButton from './IterationButton';

const Timer = ({ className, progress = 0, isLastExercise = true, isLastSet = true, isPaused = false,
    iterate = f => f, pause = f => f, finish = f => f, timeBetweenExercises, timeBetweenSets }) => (
        <div className={className}>
            {
                isPaused ?
                    (<PauseButton
                        progress={progress}
                        className="w3-jumbo" />) :
                    (<IterationButton
                        className="w3-jumbo"
                        isLastExercise={isLastExercise} isLastSet={isLastSet}
                        finish={finish} iterate={iterate} pause={pause}
                        timeBetweenExercises={timeBetweenExercises}
                        timeBetweenSets={timeBetweenSets}
                    />)
            }
        </div>
    );

export default Timer;