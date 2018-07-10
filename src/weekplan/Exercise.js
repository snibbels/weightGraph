
import React, { Component } from 'react';
import WeightForm from './WeightForm';
import { FaEdit } from 'react-icons/lib/fa';
import { addWeight } from '../redux/actions';


export default class Exercise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editmode: false
        }

        this.toggleEditmode = this.toggleEditmode.bind(this);
        this.editWeight = this.editWeight.bind(this);
    }

    toggleEditmode() {
        this.setState({ editmode: !this.state.editmode });
    }

    editWeight(weight = 0) {
        if (!weight) return;
        this.props.store.dispatch(
            addWeight(this.props.id, weight, Date.now())
        );
        this.setState({ editmode: false });
    }

    render() {
        const { editmode } = this.state;
        const { name, sets, wraps, weight } = this.props;
        return (
            <tr >
                <td>{name}</td>
                <td>{sets}</td>
                <td>{wraps}</td>
                <td>
                    {(editmode) ?
                        <WeightForm
                            onAddWeight={this.editWeight}
                            currentWeight={(weight + "kg")}
                        /> :
                        (weight + "kg")}
                    <button
                        className="w3-button"
                        onClick={this.toggleEditmode}>
                        <FaEdit />
                    </button>
                </td>
            </tr >
        )
    }
}
