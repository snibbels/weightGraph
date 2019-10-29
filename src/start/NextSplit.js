import React from 'react'
import store from '../redux/store'
import { setSplitIndex } from '../redux/actions'

const NextSplit = ({ ...props }) => {

    let _select
    const { splitIndex, splits } = store.getState();

    const onChange = () => store.dispatch(setSplitIndex(_select.value))

    return (
        <div {...props}>
            <label htmlFor="split-selector">Nächste Einheit:</label>
            <select
                onChange={onChange}
                ref={v => _select = v}
                defaultValue={splitIndex}
                name="split-selector"
                id="split-selector"
                className="w3-select w3-white">
                {splits.map((split, index) => (
                    <option value={index} key={index}>{split.name}</option>
                ))}
            </select>

        </div>
    );
}

export default NextSplit;