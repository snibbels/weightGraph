import React from 'react'
import { MdPause } from 'react-icons/lib/md'
import CircularProgressBar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const style = {
    width: "100%",
    height: "auto",
    svg: {
        maxWidth: "500px",
    },
    path: {
        fill: "#2395F388",
        stroke: "#2395F388"
    },
    text: {
        fill: "#2395F388",
    }
};

const PauseButton = ({ className, progress }) => {
    return (
        <CircularProgressBar styles={style} className={className}
            percentage={progress} text={`${progress}%`} />
    );
}

export default PauseButton