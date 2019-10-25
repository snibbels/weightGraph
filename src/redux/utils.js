import store from "./store"
import { setSplitIndex } from "./actions";

export const activateNextSplit = () => {
    const { splitIndex = 0, splits = [] } = store.getState();
    const nextIndex = (splitIndex + 1) % splits.length
    store.dispatch(setSplitIndex(nextIndex))
}

export const getLastWeightOfExercise = id => {
    const { history = [] } = store.getState();
    const weightsOfExercise = [
        ...(history
            .filter(item => item.exerciseId === id)
            .map(item => item.weight)),
        0
    ]
    return weightsOfExercise[0]
}