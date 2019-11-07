import React, { Component } from 'react'
import * as d3 from 'd3'
import store from '../redux/store'
import { getRandomPastelColor } from '../redux/utils'

/**
 * This should render the timeline and weights for any recorded exercise
 */
export default class ExerciseHistoryGraph extends Component {
    componentDidMount() {
        const { target } = this.refs
        const padding = 20, height = 200
        const elementWidth = target.offsetWidth

        const { history = [] } = store.getState()
        const times = d3.extent(history.map(h => h.timestamp))
        const weights = d3.extent(history.map(h => h.weight))
        const colorMap = history.reduce((pv, cv) => {
            const { exerciseId } = cv
            if (!pv[exerciseId])
                pv[exerciseId] = getRandomPastelColor()
            return pv
        }, {})

        const formatDate = d3.timeFormat("%d.%m.%y")
        const timeScale = d3.scaleTime()
            .domain(times)
            .range([padding, elementWidth - padding])
        const weightScale = d3.scaleLinear()
            .domain(weights)
            .range([height - padding, padding])
        const xAxis = d3.axisBottom(timeScale).ticks(4).tickFormat(formatDate)
        const yAxis = d3.axisLeft(weightScale).ticks(4)

        const svg = d3.select(target)
            .append('svg')
            .attr('height', 200)
            .attr('width', elementWidth)
        window.onresize = () => svg.attr('width', target.offsetWidth)

        svg.append('g')
            .attr('transform', "translate(0, 180)")
            .call(xAxis)

        svg.append('g')
            .attr('transform', "translate(20, 0)")
            .call(yAxis)

        svg.selectAll('circle')
            .data(history)
            .enter()
            .append('circle')
            .attr('cx', d => timeScale(d.timestamp))
            .attr('cy', d => weightScale(d.weight))
            .attr('r', 7)
            .style('fill', d => colorMap[d.exerciseId])
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
