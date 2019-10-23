import React from "react";

class Task extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card">
          <h5 className="card-header cardheader">{this.props.taskheader}</h5>
          <div className="card-body">
            <p className="card-text">{this.props.text}</p>
              <i className="fas fa-trash floatright iconcard"></i>
              {this.props.completed ?
              <i className="fas fa-undo"></i> : 
              <i className="fas fa-check iconcard"></i> }
          </div>
        </div>
        <br />

      </div>


    );
  }
}
export default Task; 