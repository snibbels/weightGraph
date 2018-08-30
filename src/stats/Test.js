import React, { Component } from 'react'
import StoreComponent from '../HOCs/StoreComponent';
import * as d3 from 'd3'
import './Test.css'

class _Test extends Component {
    componentDidMount() {
        const { element } = this.refs;
        const history = this.props.store.getState().history
            .map(h => ({ ...h, timestamp: new Date(h.timestamp).getMinutes() }));
        const w = element.offsetWidth;
        const h = 600;
        const padding = 50;
        const xScale = d3.scaleLinear()
            .domain([
                d3.min(history, d => d.timestamp),
                d3.max(history, d => d.timestamp)
            ])
            .range([padding, w - padding]);
        const yScale = d3.scaleLinear()
            .domain([
                d3.min(history, d => d.weight),
                d3.max(history, d => d.weight)
            ])
            .range([h - padding, padding])
        const aScale = d3.scaleSqrt()
            .domain([
                d3.min(history, d => d.weight),
                d3.max(history, d => d.weight)
            ])
            .range([5, 30]);

        const svg = d3.select(element)
            .append('svg')
            .attr('width', w)
            .attr('height', h);

        svg.selectAll('circle')
            .data(history)
            .enter()
            .append('circle')
            .attr('cx', d => (xScale(d.timestamp)))
            .attr('cy', d => yScale(d.weight))
            .attr('r', d => aScale(d.weight))
            .attr('fill', 'blue');


        svg.append('g')
            .attr('transform', `translate(0, ${h - padding})`)
            .attr('class', 'axis')
            .call(d3.axisBottom(xScale).tickValues([20, 25, 30, 35, 40]))

        svg.append('g')
            .attr('transform', `translate(${padding / 2}, 0)`)
            .attr('class', 'axis')
            .call(d3.axisLeft(yScale));
    }

    render() {

        return (
            <div ref="element" {...this.props} >
            </div>
        )
    }
}


const Test = StoreComponent(_Test);

export default Test;