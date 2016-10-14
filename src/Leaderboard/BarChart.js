import React from 'react'
import {Motion, spring} from 'react-motion'

const maxWidth = 400
const maxHeight = 200
const heightSecurity = 40

const BarChart = (props) => {
  // Vous pouvez vous débarasser de ces initialisation si cela vous perturbe.
  // Le but est juste de faire un graphique avec une barre par personne qui est
  // plus ou moins haute selon le score
  const maxValue = props.data.reduce((maxValue, {value}) => Math.max(maxValue, value), 0)
  const sliceWidth = maxWidth / props.data.length
  const margin = sliceWidth / 8 // margin between each bar
  const barWidth = sliceWidth / 4 * 3
  return  <Motion defaultStyle={{x: 0}} style={{x: spring(maxHeight, {stiffness: 40, damping: 5})}}>
    {(style) =>
        <svg width="400" height="220">
          {props.data.map(function(d, index) {
            const currentHeight = style.x
            return <g key={index} transform={"translate("+ ((sliceWidth + margin)* index + 100) +")"}>
                    <rect width={sliceWidth} height={currentHeight * (d.value / maxValue)} y={maxHeight - currentHeight} transform={"translate(0, "+ ((maxValue - d.value) / maxValue *maxHeight)+")"} fill="#303F9F"/>
                    <text x={sliceWidth / 2} fill="white" y={240 -  currentHeight * (d.value / maxValue)}>{d.value}</text>
                    <text y="210" fill="black">{d.label.substring(0, 4)}</text>
                </g>
          })}
        </svg>
      }
    </Motion>
}

BarChart.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default BarChart
