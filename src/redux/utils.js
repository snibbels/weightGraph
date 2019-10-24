import store from "./store"
import { setSplitIndex } from "./actions";

export const activateNextSplit = () => {
    const { splitIndex = 0, splits = [] } = store.getState();
    const nextIndex = (splitIndex + 1) % splits.length
    store.dispatch(setSplitIndex(nextIndex))
}