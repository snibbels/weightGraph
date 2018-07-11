import React, { Component } from 'react';
import Exercise from './Exercise';
import { FaEdit } from 'react-icons/lib/fa';
import '../custom.css';
import { addWeight } from '../redux/actions'

export default class WeekDay extends Component {
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

    editWeight(weight = 0, id) {
        if (!weight) return;
        this.props.store.dispatch(
            addWeight(id, weight, Date.now())
        );
        this.setState({ editmode: false });
    }

    render() {
        const { name, exercises, store } = this.props;
        return (

            <div onClick={this.toggleEditmode}>
                <span className="w3-bar hidden-container">
                    <h3 className="w3-bar-item">{name}</h3>
                    <h3 className="w3-bar-item hidden"
                        style={{ visibility: (this.state.editmode) ? "visible" : "" }}
                    >
                        <FaEdit />
                    </h3>
                </span>
                <table className="w3-table">
                    <tbody>
                        <tr>
                            <th>Übung</th>
                            <th>Sätze</th>
                            <th>Wdh</th>
                            <th>Gewicht</th>
                        </tr>
                        {
                            exercises.map((e, i) => (
                                <Exercise
                                    key={i}
                                    {...e}
                                    store={store}
                                    editmode={this.state.editmode}
                                    editWeight={this.editWeight}
                                />

                            ))
                        }
                    </tbody>
                </table>
            </div >
        )
    }
}