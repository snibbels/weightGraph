
import React, { Component } from 'react';
import WeightForm from './WeightForm';
import { FaEdit } from 'react-icons/lib/fa';
import { addWeight } from '../redux/actions';
import '../custom.css';


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
            <tr className="hidden-container">
                <td>{name}</td>
                <td>{sets}</td>
                <td>{wraps}</td>
                <td style={{ width: "11em" }}>
                    {(editmode) ?
                        <WeightForm
                            onAddWeight={this.editWeight}
                            currentWeight={(weight + "kg")}
                        /> :
                        (weight + "kg")}
                </td>
                <td style={{ width: "1em" }}>
                    <button
                        className="hidden w3-padding"
                        onClick={this.toggleEditmode}>
                        <FaEdit />
                    </button>
                </td>
            </tr >
        )
    }
}
