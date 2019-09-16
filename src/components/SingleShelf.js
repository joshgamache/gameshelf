import React from 'react'
import Box from './GameBox'

const SingleShelf = (props) => {
  const boxDimensions = {
    "x" : 40,
    "y" : 20,
    "z" : 20,
  }

  const binStub = [
    [
      {h: 106.68, id: 1, w: 38.1, x: 0, y: 330},
      {h: 215.9, id: 1, w: 71.12, x: 238.76, y: 330},
      {h: 299.72, id: 2, w: 200.66, x: 38.1, y: 330}
  ],
    [
      {h: 106.68, id: 1, w: 38.1, x: 0, y: 330},
      {h: 215.9, id: 1, w: 71.12, x: 238.76, y: 330},
      {h: 299.72, id: 2, w: 200.66, x: 38.1, y: 330}
  ]
  ]

  const shelfDimensions = {
    "x" : 330,
    "y" : 330,
  }

  const sgDim = {
    "x" : 106.68,
    "y" : 147.32,
    "z" : 38.1,
  }
  
  const eDim = {
    "x" : 200.66,
    "y" : 299.72,
    "z" : 299.72
  }

// TODO:
// Set size of canvas (the shelf)
// Create a canvas to work with
// insert multiple boxes into canvas

  return(
    // <div>
    //   <svg width={shelfDimensions.x} height={shelfDimensions.y}  style={{outline: '4px solid black'}}>
    //     <rect x="0" y="0" width={sgDim.x} height={sgDim.y} stroke-width="2" stroke="blue" fill="none" strokeOpacity="0.5"/>
    //     <rect x={sgDim.x} y="0" width={eDim.x} height={eDim.y} stroke-width="2" stroke="green" fill="none" strokeOpacity="0.5"/>
    //     <rect x="0" y="0" width={sgDim.x} height={sgDim.y} stroke-width="2" stroke="blue" fill="none" strokeOpacity="0.5"/>
    //   </svg>
    // </div>

    <div>
      <svg width={shelfDimensions.x} height={shelfDimensions.y} style={{outline: '4px solid black'}}>
        {
          binStub[0].map((bin, i) => {
          return (<rect x={bin.x} y={bin.y - bin.h} width={bin.w} height={bin.h} stroke-width="2" stroke="blue" fill="none" strokeOpacity="0.5" />);
          })
        }
      </svg>
      <svg width={shelfDimensions.x} height={shelfDimensions.y} style={{outline: '4px solid black'}}>
        {
          binStub[1].map((bin, i) => {
          return (<rect x={bin.x} y={bin.y - bin.h} width={bin.w} height={bin.h} stroke-width="2" stroke="blue" fill="none" strokeOpacity="0.5" />);
          })
        }
      </svg>

    </div>
  )
  // return <div><Box dimensions = {boxDimensions} /><Box dimensions = {boxDimensions} /></div>
};

export default SingleShelf;