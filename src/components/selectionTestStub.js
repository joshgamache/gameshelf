import React from "react";

//TODO: clean up this code. I'm pretty sure I'm doing something wrong here.
class stubList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            Object.keys(this.props.games).map((keyName, i) => {
              return(<li key={keyName} style={{display: "inline"}}><button onClick={() => this.props.onClick(this.props.games[keyName].id)} className="button">{this.props.games[keyName].name}</button></li>);
            })
          }
        </ul>
      </div>
    );
  }
}

export default stubList;