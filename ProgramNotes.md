Overall setup

TODO: try and build shelves as flexbox components rather than SVG








## Unused code

### Colsure for unique ids in lists

```
  const first = () => {
    let num = 0;
    const second = () => {
      num++;
      return num;
    }
    return second;
  }

  let incrementNumber = first();
```


### SingleShelf.js (SVG based)
The initial implementation of SingleShelf, which originally attempted to build the shelf using a SVG canvas. 
```
import React from 'react'
import GameBox from './GameBox'

const SingleShelf = (props) => {
  const shelfDimensions = {
    "x" : 330,
    "y" : 330,
  }

  const box1stub = {
    "x" : 106.68,
    "y" : 147.32,
    "z" : 38.1,
  }
  
  const box2stub = {
    "x" : 200.66,
    "y" : 299.72,
    "z" : 299.72
  }

// TODO:
// Set size of canvas (the shelf)
// Create a canvas to work with
// insert multiple boxes into canvas

  const setBoxCoordinates = () => {
    // TODO: What do I need to know to set the location of the box on the grid?
    // the size of the box (width and height)
    // the size of the shelf
    // the location of the other boxes

    const x = 0;// left edge is equal to the right edge of the last box, or the cumulative width of all boxes
    const y = 0;// top left corner is equal to shelf height minus the box height
  }

  return(
    <div class="columns is-mobile is-centered">
      <div className="column is-half">
        <svg className="scale-width" viewBox="0 0 330 330" style={{outline: '4px solid black'}}>
          <svg x="0">
            <GameBox dimensions={box1stub} />
          </svg>
          <svg x="38.1">
            <GameBox dimensions={box2stub} />
          </svg>
        </svg>
      </div>
    </div>

    // <div>
    //   <svg width={shelfDimensions.x} height={shelfDimensions.y} style={{outline: '4px solid black'}}>
    //     {
    //       binStub[0].map((bin, i) => {
    //       return (<rect x={bin.x} y={bin.y - bin.h} width={bin.w} height={bin.h} stroke-width="2" stroke="blue" fill="none" strokeOpacity="0.5" />);
    //       })
    //     }
    //   </svg>
    //   <svg width={shelfDimensions.x} height={shelfDimensions.y} style={{outline: '4px solid black'}}>
    //     {
    //       binStub[1].map((bin, i) => {
    //       return (<rect x={bin.x} y={bin.y - bin.h} width={bin.w} height={bin.h} stroke-width="2" stroke="blue" fill="none" strokeOpacity="0.5" />);
    //       })
    //     }
    //   </svg>
    // </div>
  )
  // return <div><Box dimensions = {boxDimensions} /><Box dimensions = {boxDimensions} /></div>
};

export default SingleShelf;
```


### More unused code Oct 16

```
import React from 'react';

const scaleFactor = (shelfWidth = 330, containerWidth = 330) =>{
	return shelfWidth <= containerWidth ? 1 : containerWidth / shelfWidth
}

class ScaleInside extends React.Component {

	constructor(props) {
        super(props);
        this.state = {...this.props.shefW};
    }

	render() {

		let scaleThis = 1;
		if(this.props.shefW && this.props.shefW.shelfColumns && this.props.shefW.shelfWidth){
			const shelfTotalWidth = (this.props.shefW.shelfWidth + 20) * this.props.shefW.shelfColumns
			scaleThis = scaleFactor(shelfTotalWidth, this.props.xW);
			console.log(`${scaleThis}, ${shelfTotalWidth}, ${this.props.xW}, ${this.props.shefW.shelfColumns}`)
		}

		const insideBlockSize = {
			width: `${this.props.xW}px`,
			maxWidth: `${this.props.xW}px`,
			height: `${this.props.xW}px`,
			maxHeight: `${this.props.xW}px`,
			display: "block",
			transform: `scale(${scaleThis})`
		}

		return (
			<div style={insideBlockSize}>
				<h1>{scaleThis}</h1>
				{this.props.children}
			</div>
		)
	}
}

export default ScaleInside;
```
