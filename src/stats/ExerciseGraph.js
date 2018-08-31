
import React, { Component } from 'react';
import { getExerciseHistoryData } from './dataUtils';
import * as d3 from 'd3';

export default class ExerciseGraph extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { exercise, history } = this.props;
        this.data = getExerciseHistoryData(exercise.id, history);
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        const { data } = this;
        const w = canvas.offsetWidth;
        const h = 200;
        const padding = 20;

        const svg = d3.select(canvas)
            .append('svg')
            .attr('width', w)
            .attr('height', h)

        const xScale = d3.scaleLinear()
            .domain([d3.min(data, d => d.timestamp), d3.max(data, d => d.timestamp)])
            .range([0, w])

        const yScale = d3.scaleLinear()
            .domain([d3.min(data, d => d.weight), d3.max(data, d => d.weight)])
            .range([h - padding, padding])

        const yAxis = d3.axisLeft()
            .scale(yScale)
            .ticks(6)

        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('fill', 'teal')
            .attr('y', d => h - yScale(d.weight) - padding)
            .attr('x', (d, i) => 50 * i)
            .attr('width', 40)
            .attr('height', d => yScale(d.weight))

        svg.append('g')
            .call(yAxis)
            .attr('transform', `translate(20, 0)`)

    }

    render() {
        const { exercise } = this.props;

        return (
            <div {...this.props} >
                <h2>
                    {exercise.name}
                </h2>
                <div ref="canvas"></div>
            </div>
        )
    }
}
