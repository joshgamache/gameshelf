import React from "react";

// The intent of this component is to allow and test for dynamic updating of other elements

class ControlStub extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onFormChange(event.target);
  }

  // Shelf width
  // Shelf height
  // Shelf number of columns
  // Shelf number of rows
  render() {
    const shelfWidth = this.props.shelf.individualShelfWidth,
      shelfHeight = this.props.shelf.individualShelfHeight,
      shelfColumns = this.props.shelf.numShelvesWide,
      shelfRows = this.props.shelf.numShelvesTall;
    
    return (
      <div>
        <h4 className="title">Full shelf</h4>
        <form>
          <div className="field is-grouped is-grouped-centered is-horizontal">
            <label className="label">
              Width:
              <input className="input" name="shelfWidth" type="number" value={shelfWidth} onChange={this.handleChange} />
            </label>
            <label className="label">
              Height:
              <input className="input" name="shelfHeight" type="number" value={shelfHeight} onChange={this.handleChange} />
            </label>
          </div>
          <div className="field is-grouped is-grouped-centered">
            <label className="label">
              Columns:
              <input className="input" name="shelfColumns" type="number" value={shelfColumns} onChange={this.handleChange} />
            </label>
            <label className="label">
              Rows:
              <input className="input" name="shelfRows" type="number" value={shelfRows} onChange={this.handleChange} />
            </label>
          </div>
        </form>
      </div>
    );
  }
  // Add/Remove games (use a checklist)
}

export default ControlStub;

{/* <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Dimensions</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Name">
        <span class="icon is-small is-left">
          <i class="fas fa-arrows-alt-h"></i></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Name">
        <span class="icon is-small is-left">
          <i class="fas fa-arrows-alt-v"></i></i>
        </span>
      </p>
    </div>
  </div>
</div>
<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Number of shelves</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Name">
        <span class="icon is-small is-left">
          <i class="fas fa-arrows-alt-h"></i></i>
        </span>
      </p>
        <p class="help">Columns</p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Name">
        <span class="icon is-small is-left">
          <i class="fas fa-arrows-alt-v"></i></i>
        </span>
      </p>
      <p class="help">Rows</p>
    </div>
  </div>
</div> */}