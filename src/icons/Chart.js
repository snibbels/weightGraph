import React from 'react'

const Chart = ({ style, ...props }) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        style={{ fill: 'currentColor', verticalAlign: 'middle', ...style }}
        {...props}>
        <g style={{ display: "inline" }}>
            <path
                d="M24 3.875l-6 1.221 1.716 1.708-5.351 5.358-3.001-3.002-7.336 7.242 1.41 1.418 5.922-5.834 2.991 2.993 6.781-6.762 1.667 1.66 1.201-6.002zm0 16.125v2h-24v-20h2v18h22z"
            />
        </g>
    </svg >
)

export default Chart