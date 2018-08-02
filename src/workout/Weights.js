import React from 'react';
import Disc from './Disc';

const parseSumToDiscs = (sum, discs) =>
    discs.reduce(
        (accumulator, currentValue) =>
            sum >= (accumulator.reduce((acc, cv) => acc + cv, 0) + currentValue) ?
                [...accumulator, currentValue]
                : accumulator
        , []);

const Weights = ({ sum = 5, displayedDiscs = [20, 10, 5, 2.5, 1.25, 0.5],
    addWeight = f => f, ...props }) => {

    const selectedDiscs = parseSumToDiscs(sum, displayedDiscs);
    return (
        <div {...props}>
            <h3>{`Ausgewählt: ${sum} kg`}</h3>
            {
                displayedDiscs
                    .sort((a, b) => (a === b) ? 0 : (a < b) ? 1 : -1)
                    .map((d, i) => <Disc key={i} weight={d}
                        selected={selectedDiscs.indexOf(d) > -1}
                        addWeight={addWeight}
                    />)
            }
        </div>
    );
}

export default Weights;

