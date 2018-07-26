import React from 'react';


const Split = ({
    name,
    exercises = [],
    onSaveSplit = f => f,
    editmode = false,
    className,
    style }) => {
    let exerciseInput, nameInput;
    const submit = () => {
        onSaveSplit()
    }


    return (
        <div className={className} style={style}>
            <h4>{name}</h4>
            <ul className="w3-ul">
                {exercises.map((e, i) => (
                    < li key={e.id} className="w3-display-container w3-hover-blue">
                        <span>
                            {e.name}
                        </span>
                        <span className="w3-display-right">
                            <div className="w3-padding">
                                &times;
                            </div>
                        </span>
                    </li>
                ))}
                {editmode ?
                    (<li className="w3-row w3-display-container">
                        <input
                            ref={v => exerciseInput = v}
                            style={{ width: "90%" }}
                            className="w3-input w3-col"
                            placeholder="neue Übung"
                            type="text" />
                        <input
                            className="w3-button w3-display-right"
                            value="+"
                            onClick={submit}
                            type="button" />
                    </li>) : ""
                }
            </ul>
        </div>
    );
}

export default Split;