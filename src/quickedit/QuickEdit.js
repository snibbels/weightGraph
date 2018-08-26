import React, { Component } from 'react';
import StoreComponent from '../HOCs/StoreComponent';
import FlexCardRow, { cardStyleClasses } from '../ui/FlexCardRow';
import QuickEditForm from './QuickEditForm';

class _QuickEdit extends Component {
    constructor() {
        super();
        this.state = {
            savedSplitIds: []
        }
        this.onSave = this.onSave.bind(this);
    }

    onSave(splitId) {
        this.setState({
            savedSplitIds: [
                ...this.state.savedSplitIds,
                splitId
            ]
        });
        setTimeout(() => {
            this.setState({
                savedSplitIds:
                    this.state.savedSplitIds.filter(
                        id => id !== splitId
                    )
            });
        }, 10 * 1000);
    }

    render() {
        const { store } = this.props;
        const { workoutPlan = {}, exercises = [], history = [] } = store.getState();
        const { splits = [] } = workoutPlan;

        return (
            <FlexCardRow>
                {splits.map((s, i) => (
                    <QuickEditForm
                        onSave={this.onSave}
                        exercises={exercises}
                        history={history}
                        savedSplitIds={this.state.savedSplitIds}
                        split={s}
                        splitIndex={splits.indexOf(s)}
                        className={cardStyleClasses} />
                ))}
            </FlexCardRow>
        );
    }
}

const QuickEdit = StoreComponent(_QuickEdit)

export default QuickEdit;