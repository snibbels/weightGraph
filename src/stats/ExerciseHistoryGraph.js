import React, { Component } from 'react'
import * as d3 from 'd3'
import store from '../redux/store'
import { transform } from '@babel/core'

/**
 * This should render the timeline and weights for any recorded exercise
 */
export default class ExerciseHistoryGraph extends Component {
    componentDidMount() {
        const { target } = this.refs
        const { history } = store.getState()
        const times = d3.extent(history.map(h => h.timestamp))
        const scale = d3.scaleTime().domain(times).range([50, 450])
        const yAxis = d3.axisBottom(scale)

        const svg = d3.select(target)
            .append('svg')
            .attr('height', 200)
            .attr('width', 500)

        let group = svg
            .selectAll('g')
            .data(history.map(d => d.timestamp))
            .enter()
            .append('g')
            .attr('transform', (d, i) => `translate(${scale(d)}, 0)`)

        group.append('circle')
            .attr('cy', 160)
            .attr('r', 5)
            .style('fill', 'blue')

        group.append('text')
            .text(d => (new Date(d).toLocaleDateString(d)))
            .style('font-size', 10)
            .attr('y', 115)
            .attr('x', -95)
            .attr('transform', 'rotate(-45)')
    }

    render() {
        return (
            <div {...this.props}>
                <h3>Übungsverlauf</h3>
                <div ref="target"></div>
            </div>
        )
    }
}
