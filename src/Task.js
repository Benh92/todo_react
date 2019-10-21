import React from "react";

class Task extends React.Component {
  render() {
    return (
      <div class="col-md-6">
        <div class="card">
          <h5 class="card-header cardheader">Task Header</h5>
          <div class="card-body">
            <p class="card-text">This can be the task description, Ideally this will be updated on the card.</p>
              <i className="fas fa-check iconcard"></i> 
              <i className="fas fa-trash floatright iconcard"></i>
          </div>
        </div>
        <br />

      </div>


    );
  }
}

export default Task; 